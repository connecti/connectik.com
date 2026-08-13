import { ArrowDown, ArrowRight, Check, Heart, Menu, Quote, Sparkles, Star } from 'lucide-react';
import BookingFlow from './components/BookingFlow';

const offers = [
  { id:'clarte', number:'01', name:'Déclic', duration:'60 min', price:90, label:'Séance ponctuelle', desc:'Une séance ciblée pour débloquer une situation, clarifier vos priorités et repartir avec un plan d’action concret.', features:['Échange préparatoire','60 min en visioconférence','Feuille de route personnalisée'] },
  { id:'elan', number:'02', name:'Élan', duration:'3 × 60 min', price:240, label:'Parcours essentiel', popular:true, desc:'Trois rendez-vous pour faire émerger un cap clair, dépasser vos freins et installer un nouvel élan durable.', features:['3 séances sur 6 semaines','Exercices entre les séances','Suivi vocal personnalisé'] },
  { id:'metamorphose', number:'03', name:'Métamorphose', duration:'6 × 60 min', price:450, label:'Transformation profonde', desc:'Un accompagnement intensif pour transformer durablement votre rapport à vous-même et passer pleinement à l’action.', features:['6 séances sur 3 mois','Support illimité entre séances','Bilan de progression complet'] },
];

export default function Home() {
  return <main>
    <header className="nav"><a className="logo" href="#">é<span>l</span>an.</a><nav><a href="#approche">L’approche</a><a href="#offres">Accompagnements</a><a href="#temoignages">Témoignages</a></nav><a href="#reserver" className="navCta">Réserver <ArrowRight size={16}/></a><button className="menu" aria-label="Menu"><Menu/></button></header>
    <section className="hero">
      <div className="orb orb1"/><div className="orb orb2"/>
      <div className="heroContent"><div className="eyebrow"><Sparkles size={14}/> Coaching individuel · Paris & à distance</div><h1>Et si vous osiez<br/>vivre <em>pleinement</em> ?</h1><p>Je vous aide à retrouver la clarté, la confiance et l’élan nécessaires pour créer une vie qui vous ressemble vraiment.</p><div className="heroActions"><a className="primary" href="#offres">Découvrir les accompagnements <ArrowRight size={18}/></a><a className="textLink" href="#approche">Comprendre mon approche <ArrowDown size={16}/></a></div></div>
      <div className="heroVisual"><div className="portrait"><div className="portraitShape"><span>É</span></div><div className="floatingCard"><Heart size={18}/><span><b>+ 180</b> personnes accompagnées</span></div></div><p className="signature">Clara Morel<br/><span>Coach certifiée ICF</span></p></div>
      <div className="trust"><div><b>4.9/5</b><span><Star size={12} fill="currentColor"/> 67 avis vérifiés</span></div><i/><div><b>7 ans</b><span>d’expérience</span></div><i/><div><b>100%</b><span>confidentiel</span></div></div>
    </section>

    <section className="approach" id="approche"><div><span className="sectionTag">Mon approche</span><h2>Un espace pour vous<br/><em>retrouver.</em></h2></div><div className="approachText"><p>Vous n’avez pas besoin qu’on vous dise quoi faire. Vous avez besoin d’un espace juste, sans jugement, pour entendre enfin ce qui compte vraiment pour vous.</p><p>Mon approche mêle écoute profonde, questionnement puissant et outils concrets. Chaque séance est une respiration — et un pas vers la personne que vous souhaitez devenir.</p><div className="values"><span>Écoute</span><span>Clarté</span><span>Mouvement</span></div></div></section>

    <section className="offers" id="offres"><div className="sectionIntro"><span className="sectionTag">Les accompagnements</span><h2>Choisissez l’élan<br/>qui vous <em>ressemble.</em></h2><p>Chaque parcours est une invitation à avancer à votre rythme, avec un cadre clair et bienveillant.</p></div><div className="offerGrid">{offers.map(o=><article className={`offer ${o.popular?'featured':''}`} key={o.id}>{o.popular&&<div className="popular">Le plus choisi</div>}<span className="offerNumber">{o.number}</span><div className="offerHead"><span>{o.label}</span><h3>{o.name}</h3><p>{o.desc}</p></div><ul>{o.features.map(f=><li key={f}><Check size={15}/>{f}</li>)}</ul><div className="offerBottom"><div><b>{o.price} €</b><span>{o.duration}</span></div><a href={`#reserver?offre=${o.id}`}>Choisir <ArrowRight size={18}/></a></div></article>)}</div></section>

    <section className="testimonial" id="temoignages"><Quote/><blockquote>« Clara m’a aidée à remettre du mouvement là où tout semblait figé. Je suis repartie avec bien plus qu’un plan : une confiance nouvelle en mes propres choix. »</blockquote><div><span className="avatar">AM</span><p><b>Amélie M.</b><br/>Parcours Élan · janvier 2026</p></div></section>

    <BookingFlow offers={offers.map(({id,name,duration,price})=>({id,name,duration,price}))}/>
    <footer><a className="logo" href="#">é<span>l</span>an.</a><p>Retrouvez votre cap. Révélez votre élan.</p><div><a href="mailto:bonjour@elan-coaching.fr">bonjour@elan-coaching.fr</a><a href="#">Mentions légales</a><a href="#">Confidentialité</a></div><small>© 2026 Élan Coaching · Paris & à distance</small></footer>
  </main>
}
