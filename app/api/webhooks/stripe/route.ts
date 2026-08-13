import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req:Request){
 const stripeKey=process.env.STRIPE_SECRET_KEY; const webhookSecret=process.env.STRIPE_WEBHOOK_SECRET;
 if(!stripeKey||!webhookSecret)return NextResponse.json({error:'Webhook non configuré'},{status:503});
 const stripe=new Stripe(stripeKey); const signature=req.headers.get('stripe-signature');
 if(!signature)return NextResponse.json({error:'Signature manquante'},{status:400});
 let event:Stripe.Event;
 try{event=stripe.webhooks.constructEvent(await req.text(),signature,webhookSecret)}catch{return NextResponse.json({error:'Signature invalide'},{status:400})}
 if(event.type==='checkout.session.completed'){
  const session=event.data.object; const m=session.metadata;
  if(!m?.date||!m.time||!m.name||!m.email||!m.phone||!process.env.CAL_API_KEY||!process.env.CAL_EVENT_TYPE_ID)return NextResponse.json({error:'Métadonnées de réservation incomplètes'},{status:400});
  const start=`${m.date}T${m.time}:00.000Z`;
  const cal=await fetch('https://api.cal.com/v2/bookings',{method:'POST',headers:{'Content-Type':'application/json','cal-api-version':'2024-08-13',Authorization:`Bearer ${process.env.CAL_API_KEY}`},body:JSON.stringify({start,eventTypeId:Number(process.env.CAL_EVENT_TYPE_ID),attendee:{name:m.name,email:m.email,timeZone:'Europe/Paris',phoneNumber:m.phone,language:'fr'},metadata:{stripeSessionId:session.id,offerId:m.offerId}})});
  if(!cal.ok)return NextResponse.json({error:'La création du rendez-vous Cal.com a échoué'},{status:502});
 }
 return NextResponse.json({received:true});
}
