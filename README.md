# Élan — site de démonstration pour coach

## Réponse courte

**Oui, le site et son design sont faits.** Il contient la page d’accueil, les trois offres, le choix d’un créneau, le formulaire client, le paiement Stripe et la page de confirmation.

**Le site n’est pas encore publié sur Internet.** Il faut le mettre en ligne et connecter les comptes réels Stripe et Cal.com avant de pouvoir accepter de vrais clients.

## Comment voir la vraie application — sans la publier

Dans le dossier du projet, lancer :

```bash
npm install
npm run dev
```

Ouvrir ensuite **http://localhost:3000** dans le navigateur. C’est la véritable application Next.js : le parcours, les formulaires et les routes de paiement sont ceux du projet, pas une copie HTML séparée. Rien n’est publié sur Internet : l’adresse n’est accessible que sur l’ordinateur qui lance l’application. Sans clés Stripe, le dernier bouton utilise le mode de démonstration et aucun paiement réel n’est effectué.

## Ce qui est déjà terminé

- identité visuelle premium et affichage adapté au téléphone ;
- page de présentation de la coach ;
- trois offres : Déclic, Élan et Métamorphose ;
- choix de l’offre, de la date et de l’heure ;
- formulaire avec nom, email et téléphone ;
- paiement Stripe en mode test ;
- confirmation du rendez-vous après le paiement ;
- connexion prévue avec Cal.com sans demander de compte Google au client.

## Ce qu’il reste à faire avant de vendre

Ces étapes nécessitent les comptes du propriétaire du futur site :

1. **Choisir l’adresse du site**, par exemple `elan-coaching.fr`.
2. **Créer ou fournir un compte Stripe** pour recevoir les paiements.
3. **Créer ou fournir un compte Cal.com** et renseigner les vraies disponibilités de la coach.
4. **Mettre le site en ligne**, par exemple sur Vercel.
5. Remplacer les textes fictifs, la fausse identité « Clara Morel », le témoignage et les coordonnées par ceux du vrai client.
6. Ajouter les mentions légales et la politique de confidentialité du vrai professionnel.
7. Effectuer un paiement test complet avant l’ouverture au public.

## Informations techniques pour la mise en ligne

Copier `.env.example` vers `.env.local`, puis renseigner les clés de test Stripe et Cal.com.

L’adresse `/api/webhooks/stripe` doit être déclarée dans Stripe pour l’événement `checkout.session.completed`. Ce webhook vérifie le paiement avant de demander à Cal.com de créer le rendez-vous. La grille visible dans la démo est actuellement illustrative ; lors du raccordement au compte Cal.com du client, elle devra être alimentée par ses disponibilités réelles.
