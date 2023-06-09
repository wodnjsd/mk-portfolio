import bonding from "@/public/assets/treatments/bonding.jpg";
import bridge from "@/public/assets/treatments/bridge.jpg";
import veneer from "@/public/assets/treatments/veneer.jpg";
import general from "@/public/assets/treatments/general.jpg";
import invisalign from "@/public/assets/treatments/invisalign.jpg";
import whitening from "@/public/assets/treatments/whitening.jpg";

export default [
  {
    id: 1,
    name: "General Dentistry",
    description: `General dentistry covers a range of treatment options and procedures fundamental to protecting and maintaining a good standard of oral health.
 
  A routine examination is at the center of creating your personal dental plan. It allows your general dentist to clearly define what treatment is necessary for your continued oral health. 
  
  A routine examination can spot early signs of any irregularities and treat them before they progress further. This is extremely important as many oral health issues are “silent” and go unnoticed..`,
    image: general,
  },
  {
    id: 2,
    name: "Composite Bonding",
    description: `Composite Bonding is thin layers of composite resin placed on the front surfaces of teeth to change the appearance of your smile. Teeth that are discolored, chipped, rotated, or spaced can be transformed with bonding.
  
  The teeth are generally not prepared, and tooth-colored filling material is placed on the front of the teeth, shaped to the desired form, and then finished and polished to a life-like shine. A second polishing appointment is usually necessary.`,
    image: bonding,
    faq: [
      {
        q: "How many visits are needed?",
        answer:
          "The composites themselves are done in one appointment. We will always book a consultation appointment first. Most people will have a review appointment after to ensure they are completely happy.",
      },
      {
        q: "Will I need an injection?",
        answer:
          "The great majority of all cases are completed pain-free and without the need for any injections.",
      },
      {
        q: "How long do composite veneers last?",
        answer:
          "As with most cosmetic dental procedures, they will eventually need replacing. Typically, we see good results of up to 5 years for composite veneers and 7 years for edge bonding, dependent upon care",
      },
      {
        q: "Do your teeth have to be straight first before composite bonding?",
        answer:
          "We would always recommend straightening before the bonding as it helps. Slight minor misalignment can be masked with composite. However, it is always advisable to straighten with braces or with aligners first.",
      },
    ],
  },
  {
    id: 3,
    name: "Invisalign",
    description: `Invisalign is a virtually invisible orthodontic appliance that straightens teeth as an alternative to the traditional metal ‘train track’ braces.
  
  It uses a series of clear aligners which are custom-made, barely visible, and removable.`,
    image: invisalign,
    faq: [
      {
        q: "What are the benefits of Invisalign?",
        answer: `
        Invisalign aligners are virtually invisible, removable, and allow for unrestricted eating and drinking. They can be easily removed for oral hygiene practices such as brushing and flossing. Unlike fixed braces, Invisalign does not require brackets and wires, resulting in fewer appointments and less time off work for adjustments.`,
      },
      {
        q: "Does it hurt?",
        answer:
          "Invisalign applies gentle forces to the teeth over the course of the treatment and there is some initial discomfort as the teeth start to move, but no pain.",
      },
      {
        q: "How long will it take to straighten my teeth?",
        answer:
          "Treatment length varies between patients, but the expected length is anywhere between a few months to two years depending on the complexity of the case.",
      },
      {
        q: "After treatment, do I need to wear retainers?",
        answer:
          "Retainers must be worn lifelong at nighttime for the teeth to stay in the same position after finishing treatment.",
      },
    ],
  },
  {
    id: 4,
    name: "Whitening",
    description: `Teeth whitening is a cosmetic treatment which involves bleaching your teeth to make them whiter.
  
  The best way to keep your smile healthy and bright is to look after your teeth and gums, but it’s not unusual to need a little help.
  
  You might consider teeth whitening for different reasons. Your teeth can lose their whiteness with age but can also become stained by smoking or drinking lots of tea, coffee or red wine.`,
    image: whitening,
    faq: [
      {
        q: "How long will it last?",
        answer:
          "Post-whitening results vary from person to person. This also depends on how well the teeth are maintained. We often advise top-up applications 6 months - 1 year depending on the individual. Contact your dentist to discuss topping up further.",
      },
      {
        q: "Are teeth whitening safe?",
        answer:
          "Whilst whitening is a safe treatment, we do advise that you see your dentist prior to having any whitening to ensure you are dentally fit to proceed. Whitening is not suitable for pregnant women, mothers who are breastfeeding, and under 18 years of age.",
      },
      {
        q: "Will my crown, bridge, or fillings whiten?",
        answer:
          "Unfortunately, the whitening agent will not change the colour of any artificial material in the teeth or mouth.",
      },
    ],
  },
  {
    id: 5,
    name: "Crowns/ Bridges",
    description: `When you have a tooth that is extensively damaged or at high risk of fracture, a traditional filling might not be sufficient to support it long-term. In these situations, your general dentist might suggest a dental crown is used to restore the affected tooth.
  
  Whereas a filling will fill a hole in the tooth, a crown is designed to cover the damaged tooth, protecting it from further decay and damage.

  Crowns are also regularly used to treat chipped teeth and restore the tooth after root canal treatment. If a crown is recommended, your general dentist will prepare the tooth for the crown to be made by a dental laboratory.

  A bridge is a crown placed on a prepared tooth but with an add-on to fill the gap of a missing tooth. `,
    image: bridge,
  },
  {
    id: 6,
    name: "Porcelain Veneers",
    description: `Porcelain closely resembles natural enamel, offering a more natural and attractive appearance while resisting stains better than the alternative material, composite.
  
  They typically last 10-15 years with proper care, but reparis are more challenging compared to composite.
  
  Creating space on the tooth is necessary for fitting porcelain veneers, often involving drilling small amounts of the natural tooth.
  
  Impressions will then be taken and sent to a specialized lab to craft your high-quality veneers, during which temporary veneers are provided.
  Finally, the definitive veneers will be applied to the prepared teeth using adhesive glue.`,
    image: veneer,
  },
];
