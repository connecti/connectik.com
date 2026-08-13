import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const offers:Record<string,{name:string;price:number}>={clarte:{name:'Déclic',price:90},elan:{name:'Élan',price:240},metamorphose:{name:'Métamorphose',price:450}};
export async function POST(req:Request){
 try{
  const body=await req.json(); const offer=offers[body.offerId];
  if(!offer||!body.date||!body.time||!body.name||!body.email||!body.phone)return NextResponse.json({error:'Merci de compléter toutes les informations.'},{status:400});
  const origin=new URL(req.url).origin;
  if(!process.env.STRIPE_SECRET_KEY){
   const query=new URLSearchParams({demo:'true',offer:offer.name,date:body.date,time:body.time,name:body.name});
   return NextResponse.json({url:`${origin}/confirmation?${query}`});
  }
  const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
  const session=await stripe.checkout.sessions.create({mode:'payment',customer_email:body.email,line_items:[{quantity:1,price_data:{currency:'eur',unit_amount:offer.price*100,product_data:{name:`Coaching Élan — ${offer.name}`,description:`Premier rendez-vous le ${body.date} à ${body.time}`}}}],metadata:{offerId:body.offerId,date:body.date,time:body.time,name:body.name,email:body.email,phone:body.phone},success_url:`${origin}/confirmation?session_id={CHECKOUT_SESSION_ID}`,cancel_url:`${origin}/#reserver`});
  return NextResponse.json({url:session.url});
 }catch{return NextResponse.json({error:'Impossible d’initier le paiement. Réessayez dans un instant.'},{status:500})}
}
