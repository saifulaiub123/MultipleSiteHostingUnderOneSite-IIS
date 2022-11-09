import { ReservationType } from "@models/Reservation"


const LANDING_SLIDER = [
    {
      img: './src/assets/img/slider-4_img_1.jpg',
      title: "l'lle O Spa",
      subtitle: 'Le meilleur moment pour se détendre',
      reservationType: ReservationType.Appointment,
      cta: {
        upper: 'Rendez-vous maintenant',
        lower: 'Lire la suite'
      },
      showRight: false
    },
    {
      img: './src/assets/img/slider-4_img_2.jpg',
      title: "l'lle O Spa",
      subtitle: 'Le meilleur traitement',
      reservationType: ReservationType.Care,
      cta: {
        upper: 'Rendez-vous maintenant',
        lower: 'Lire la suite'
      },
      showRight: true
    },
    {
      img: './src/assets/img/slider-4_img_3.jpg',
      title: "Centre de bien-être et salon",
      subtitle: 'Le meilleur traitement',
      reservationType: ReservationType.Care,
      cta: {
        upper: 'Rendez-vous maintenant',
        lower: 'Lire la suite'
      },
      showRight: false
    },
  ]

  export {LANDING_SLIDER}