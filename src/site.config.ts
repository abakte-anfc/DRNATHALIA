export type Language = 'pt' | 'es';
export type Text = Partial<Record<Language,string>>;
export type Procedure = {name:Text; description:Text};
export type Media = {src:string; alt:Text; label:Text};
export interface SiteConfig {
 identity:{name:string;clinic:string;registration:string;specialty:Text;presentation:Text;biography:Text};
 contacts:{whatsapp:string;message:Text;instagram:string;email:string;address:Text;mapUrl:string};
 visual:{logo:string;portrait:string;portraitAlt:Text;colors:{accent:string;background:string;surface:string;text:string;muted:string};fonts:{body:string;heading:string};animationIntensity:number};
 languages:{default:Language;available:Language[];storageKey:string};
 metadata:{title:Text;description:Text;siteUrl:string;shareImage:string;indexable:boolean};
 sections:Record<'about'|'procedures'|'gallery'|'videos'|'testimonials'|'steps'|'faq'|'location'|'contact',boolean>;
 content:{hero:Text[];eyebrow:Text;procedures:{name:Text;items:Procedure[]}[];gallery:Media[];videos:{src:string;poster:string;label:Text}[];testimonials:{quote:Text;attribution:Text}[];steps:{title:Text;body:Text}[];faq:{question:Text;answer:Text}[]};
}
// Demonstração: nenhum nome, registro, contato, resultado ou depoimento real.
export const siteConfig:SiteConfig={
 identity:{name:'Nome do profissional · Demo',clinic:'',registration:'',specialty:{pt:'Sua área de atuação',es:'Tu área de actuación'},presentation:{pt:'Base demonstrativa para apresentar seu trabalho e sua forma de cuidar. Personalize os textos antes de publicar.',es:'Base de demostración para presentar tu trabajo y tu forma de cuidar. Personaliza los textos antes de publicar.'},biography:{pt:'Conteúdo demonstrativo. Apresente aqui a trajetória, a formação e a abordagem do profissional, com informações verificadas.',es:'Contenido de demostración. Presenta aquí la trayectoria, formación y enfoque del profesional con información verificada.'}},
 contacts:{whatsapp:'',message:{pt:'Olá, gostaria de informações sobre o atendimento.',es:'Hola, me gustaría recibir información sobre la atención.'},instagram:'',email:'',address:{},mapUrl:''},
 visual:{logo:'',portrait:'/media/abstract.svg',portraitAlt:{pt:'Composição abstrata demonstrativa, sem pessoas',es:'Composición abstracta de demostración, sin personas'},colors:{accent:'#c9a66b',background:'#0d0a0d',surface:'#29101f',text:'#f5f0e8',muted:'#bcb3b8'},fonts:{body:"'Manrope', Arial, sans-serif",heading:"'Cormorant Garamond', Georgia, serif"},animationIntensity:1},
 languages:{default:'pt',available:['es','pt'],storageKey:'site-language'},
 metadata:{title:{pt:'Site profissional · Demonstração',es:'Sitio profesional · Demostración'},description:{pt:'Template demonstrativo para profissionais da saúde e estética. Conteúdo a personalizar.',es:'Template de demostración para profesionales de salud y estética. Contenido para personalizar.'},siteUrl:'',shareImage:'/media/abstract.svg',indexable:false},
 sections:{about:true,procedures:true,gallery:true,videos:true,testimonials:true,steps:true,faq:true,location:true,contact:true},
 content:{eyebrow:{pt:'BASE DEMONSTRATIVA · PERSONALIZE',es:'BASE DE DEMOSTRACIÓN · PERSONALIZA'},hero:[{pt:'Seu trabalho,',es:'Tu trabajo,'},{pt:'sua forma de',es:'tu forma de'},{pt:'cuidar.',es:'cuidar.'}],procedures:[{name:{pt:'Área de atuação · Demo',es:'Área de actuación · Demo'},items:[{name:{pt:'Serviço demonstrativo',es:'Servicio de demostración'},description:{pt:'Substitua este exemplo por um serviço realmente oferecido. Descreva sua finalidade e a necessidade de avaliação individual, após revisão do profissional.',es:'Sustituye este ejemplo por un servicio realmente ofrecido. Describe su finalidad y la necesidad de evaluación individual tras la revisión del profesional.'}}]}],gallery:[],videos:[],testimonials:[],steps:[{title:{pt:'Etapa demonstrativa',es:'Etapa de demostración'},body:{pt:'Descreva aqui uma etapa real do atendimento.',es:'Describe aquí una etapa real de la atención.'}}],faq:[{question:{pt:'Como personalizar esta página?',es:'¿Cómo personalizar esta página?'},answer:{pt:'Este é um conteúdo demonstrativo. Substitua por dúvidas reais e respostas revisadas pelo profissional.',es:'Este es un contenido de demostración. Sustituye por preguntas reales y respuestas revisadas por el profesional.'}}]}
};
