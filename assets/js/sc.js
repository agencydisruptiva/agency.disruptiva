
const EN = {
    TITLE: 'Disruptiva - Skyrocket your business with us!',
    BOOK_NOW: 'Book Now',
    HERO: {
        HEAD: 'FROM 3 TO 7',
        TITLE: '7-Figure Ascension in just 3 steps',
        SUBTITLE: 'How to scale your skincare / make-up brand without depending on Facebook Ads or Influencers'
    },
    ABOUT: {
        VIDEO: {
            TITLE: 'This is how we can make your business grow',
            URL: 'assets/videos/main_en.mp4',
        },
        TITLE: 'Scale your Business with Us',
        DESCRIPTION: " Disruptiva isn't your typical marketing agency. We're more than just a service provider; we're your dedicated ally, fully invested in your success. That's why we tailor unique plans for each of our clients, ensuring optimal results within their desired timeframe. We're in this together, committed to achieving greatness alongside you. ",
        ITEMS: {
            1: {
                TITLE: 'Scale your business',
                DESCRIPTION: 'While scaling is focused on rapid growth, prioritize long-term sustainability and profitability.'
            },
            2: {
                TITLE: 'Growth in your market',
                DESCRIPTION: 'Utilize data analytics to personalize marketing efforts and optimize sales funnels.'
            },

        }
    },
    WE_DO: {
        TITLE: 'What We DO',
        DESCRIPTION: 'Unlock the secrets to explosive growth with our proven formula for skyrocketing your business to seven-figure success in just three simple steps.',
        CARDS: {
            1: {
                TITLE: '360 Growth Formula',
                DESCRIPTION: 'Actionable strategies and expert insights to elevate your business '
            },
            2: {
                TITLE: 'Focus On Results',
                DESCRIPTION: 'Set results and get the brand tactic plans ready to achieve them.'
            },
            3: {
                TITLE: 'Price Based On Results',
                DESCRIPTION: 'Say goodbye to traditional payment models and embrace a revolutionary approach '
            },
        }
    },
    UNLOCK_SECRETS: {
        TITLE: 'Unlock the secrets to explosive growth'
    },
    CONTACT: {
        TITLE: 'Wanna send us a message?',
        FORM: {
            NAME: 'Name',
            EMAIL: 'Email',
            MESSAGE: 'Message',
            PHONE: 'Phone',
            SUBJECT: 'Subject',
            SEND: 'Submit now'
        }
    },
    FOOTER: {
        COPY: '©2024 DISRUPTIVA. All rights reserved.'
    }

}

const ES = {
    TITLE: 'Disruptiva - ¡Haz despegar tu negocio con nosotros!',
    BOOK_NOW: 'Reserva ahora',
    HERO: {
        HEAD: 'DE 3 A 7',
        TITLE: 'Ascenso de 7 cifras en solo 3 pasos',
        SUBTITLE: 'Cómo escalar tu marca de cuidado de la piel / maquillaje sin depender de Facebook Ads o Influencers'
    },
    ABOUT: {
        VIDEO: {
            TITLE: 'Así es cómo podemos hacer crecer tu negocio',
            URL: 'assets/videos/main_es.mp4',
        },
        TITLE: 'Escala tu negocio con nosotros',
        DESCRIPTION: "Disruptiva no es tu agencia de marketing típica. Somos más que un proveedor de servicios; somos tu aliado dedicado, completamente invertido en tu éxito. Es por eso que adaptamos planes únicos para cada uno de nuestros clientes, asegurando resultados óptimos dentro del plazo deseado. Estamos juntos en esto, comprometidos a alcanzar la grandeza junto a ti.",
        ITEMS: {
            1: {
                TITLE: 'Escala tu negocio',
                DESCRIPTION: 'Si bien la escalabilidad se centra en un crecimiento rápido, prioriza la sostenibilidad y rentabilidad a largo plazo.'
            },
            2: {
                TITLE: 'Crecimiento en tu mercado',
                DESCRIPTION: 'Utiliza análisis de datos para personalizar los esfuerzos de marketing y optimizar los embudos de ventas.'
            },
        }
    },
    WE_DO: {
        TITLE: 'Lo que hacemos',
        DESCRIPTION: 'Desbloquea los secretos para un crecimiento explosivo con nuestra fórmula probada para hacer despegar tu negocio hacia el éxito de siete cifras en solo tres simples pasos.',
        CARDS: {
            1: {
                TITLE: 'Fórmula de crecimiento 360',
                DESCRIPTION: 'Estrategias prácticas e información de expertos para elevar tu negocio'
            },
            2: {
                TITLE: 'Enfoque en resultados',
                DESCRIPTION: 'Establece resultados y prepara los planes de táctica de marca para lograrlos.'
            },
            3: {
                TITLE: 'Precio basado en resultados',
                DESCRIPTION: 'Dile adiós a los modelos de pago tradicionales y abraza un enfoque revolucionario'
            },
        }
    },
    UNLOCK_SECRETS: {
        TITLE: 'Desbloquea los secretos para un crecimiento explosivo'
    },
    CONTACT: {
        TITLE: '¿Quieres enviarnos un mensaje?',
        FORM: {
            NAME: 'Nombre',
            EMAIL: 'Correo electrónico',
            MESSAGE: 'Mensaje',
            PHONE: 'Telefono',
            SUBJECT: 'Asunto',
            SEND: 'Enviar ahora'
        }
    },
    FOOTER: {
        COPY: '©2024 DISRUPTIVA. Todos los derechos reservados.'
    }
};



function setLang(LANG) {
    LANG.includes('en') ? LANG = EN : LANG = ES;

    document.title = LANG.TITLE;

    changeElement('.lang_book_now', LANG.BOOK_NOW);

    changeElement('.lang_hero_head', LANG.HERO.HEAD);
    changeElement('.lang_hero_title', LANG.HERO.TITLE);
    changeElement('.lang_hero_subtitle', LANG.HERO.SUBTITLE);
    changeElement('.lang_about_video_title', LANG.ABOUT.VIDEO.TITLE);
    document.getElementById('video').src = LANG.ABOUT.VIDEO.URL;
    changeElement('.lang_about_title', LANG.ABOUT.TITLE);
    changeElement('.lang_about_description', LANG.ABOUT.DESCRIPTION);

    changeElement('.lang_about_items_1_title', LANG.ABOUT.ITEMS[1].TITLE);
    changeElement('.lang_about_items_1_description', LANG.ABOUT.ITEMS[1].DESCRIPTION);
    changeElement('.lang_about_items_2_title', LANG.ABOUT.ITEMS[2].TITLE);
    changeElement('.lang_about_items_2_description', LANG.ABOUT.ITEMS[2].DESCRIPTION);

    changeElement('.lang_we_do_title', LANG.WE_DO.TITLE);
    changeElement('.lang_we_do_description', LANG.WE_DO.DESCRIPTION);
    changeElement('.lang_we_do_items_1_title', LANG.WE_DO.CARDS[1].TITLE);
    changeElement('.lang_we_do_items_1_description', LANG.WE_DO.CARDS[1].DESCRIPTION);
    changeElement('.lang_we_do_items_2_title', LANG.WE_DO.CARDS[2].TITLE);
    changeElement('.lang_we_do_items_2_description', LANG.WE_DO.CARDS[2].DESCRIPTION);
    changeElement('.lang_we_do_items_3_title', LANG.WE_DO.CARDS[3].TITLE);
    changeElement('.lang_we_do_items_3_description', LANG.WE_DO.CARDS[3].DESCRIPTION);

    changeElement('.lang_unlock_secrets_title', LANG.UNLOCK_SECRETS.TITLE);

    changeElement('.lang_contact_title', LANG.CONTACT.TITLE);
    document.querySelector('input[name="name"]').placeholder = LANG.CONTACT.FORM.NAME;
    document.querySelector('input[name="email"]').placeholder = LANG.CONTACT.FORM.EMAIL;
    document.querySelector('input[name="phone"]').placeholder = LANG.CONTACT.FORM.PHONE;
    document.querySelector('input[name="subject"]').placeholder = LANG.CONTACT.FORM.SUBJECT;
    document.querySelector('textarea[name="message"]').placeholder = LANG.CONTACT.FORM.MESSAGE;
    changeElement('.lang_contact_send', LANG.CONTACT.FORM.SEND);

    changeElement('.lang_footer_copy', LANG.FOOTER.COPY);
    
    function changeElement(element, text) {
        document.querySelectorAll(element).forEach(element => {
            element.textContent = text;
        });
    }
}



