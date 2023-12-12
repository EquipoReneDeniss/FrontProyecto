import { Component } from '@angular/core';
import { faWheatAwn, faMugSaucer} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agricultura',
  templateUrl: './agricultura.component.html',
  styleUrls: ['./agricultura.component.css']
})
export class AgriculturaComponent {
  
  faMugSaucer = faMugSaucer;
  faWheatAwn = faWheatAwn;

  //CAFE
  texto= " Puebla es una región importante para la producción de café en México. Las plantaciones de café en Puebla suelen ubicarse en áreas de montaña con suelos ricos y climas adecuados. Xicotepec de Juárez, en particular, podría tener características únicas en cuanto a altitud, microclima y suelo que influyen en las características del café producido en la región.";

  titulo = "CAFE"

  name !:string;

  i=0;

  cambiaTexto() :void{  //////////////////////////////CAFE//////////////////////////////
    this.i++
  if(this.i==0)
  this.titulo = "CAFÉ",
  this.texto=" Puebla es una región importante para la producción de café en México. Las plantaciones de café en Puebla suelen ubicarse en áreas de montaña con suelos ricos y climas adecuados. Xicotepec de Juárez, en particular, podría tener características únicas en cuanto a altitud, microclima y suelo que influyen en las características del café producido en la región.";
else if(this.i==1)
this.titulo = "CAFÉ",
this.texto=" A menudo, las comunidades cafetaleras tienen tradiciones y relatos únicos relacionados con el cultivo, la cosecha y la producción de café."
else if(this.i==2)
this.titulo = "CAFÉ",
this.texto="Te ofrecemos el mejor café de altura, artesanal 100% orgánico. El café nos llega verde y, con una combinación de técnica y mucho cariño por nuestra profesión, nosotros lo transformamos en los granos marrones que conoces. Cada lote que realizamos en nuestras instalaciones de Xicotepec de Juárez ha sido tostado con sumo cuidado, para que las notas que encuentres al degustarlo sean potentes y completas."
else{
  this.titulo = "CAFÉ",
  this.texto=" A menudo, las comunidades cafetaleras tienen tradiciones y relatos únicos relacionados con el cultivo, la cosecha y la producción de café.";
  this.i=0;
  }
}

cambiaTexto1() :void{ ////////////////////////////// ACELGAS //////////////////////////////
  this.i++
if(this.i==0)
this.titulo = "ACELGAS",
this.texto=" Las acelgas (Beta vulgaris var. cicla) son una verdura de hojas verdes que pertenecen a la familia de las amarantáceas. Aquí tienes algunos datos interesantes sobre las acelgas";
else if(this.i==1)
this.titulo = "ACELGAS",
this.texto= "Son una excelente fuente de vitaminas y minerales, incluyendo vitamina K, vitamina A, vitamina C, ácido fólico, hierro y calcio. También contienen fibra dietética, lo que las hace beneficiosas para la salud digestiva, el consumo regular de acelgas se ha asociado con la reducción del riesgo de enfermedades crónicas, como enfermedades cardíacas y diabetes tipo 2."
else if(this.i==2)
this.titulo = "ACELGAS",
this.texto="Las acelgas pueden cocinarse de diversas maneras, como hervidas, salteadas o agregadas a sopas y guisos, contienen oxalatos, que pueden interferir con la absorción de minerales, las personas propensas a cálculos renales deben moderar su consumo de alimentos ricos en oxalatos."
else{
  this.titulo = "ACELGAS",
this.texto=" Las acelgas (Beta vulgaris var. cicla) son una verdura de hojas verdes que pertenecen a la familia de las amarantáceas. Aquí tienes algunos datos interesantes sobre las acelgas";
this.i=0;
}
}

cambiaTexto2() :void{ //////////////////////////////  CHILE SERRANO //////////////////////////////
  this.i++
if(this.i==0)
this.titulo = "CHILE SERRANO",
this.texto="El chile serrano es una planta que prospera en climas cálidos y moderadamente húmedos. Puebla, en general, tiene una variedad de climas debido a su topografía, lo que podría afectar las condiciones de cultivo.";
else if(this.i==1)
this.titulo = "CHILE SERRANO",
this.texto="Los chiles serranos son una buena fuente de vitamina C y contienen antioxidantes que pueden tener beneficios para la salud. También aportan vitaminas del grupo B, así como minerales como el potasio y el hierro."
else if(this.i==2)
this.titulo = "CHILE SERRANO",
this.texto="Los chiles serranos son una parte fundamental de la cocina mexicana, y se utilizan en una variedad de platillos para agregar sabor y picante. Conocer las prácticas locales de cocina y cómo se utilizan los chiles serranos en la región puede proporcionar información adicional sobre su importancia cultural."
else{
  this.titulo = "CHILE SERRANO",
this.texto="El chile serrano es una planta que prospera en climas cálidos y moderadamente húmedos. Puebla, en general, tiene una variedad de climas debido a su topografía, lo que podría afectar las condiciones de cultivo.";
this.i=0;
}
}

cambiaTexto3() :void{ //////////////////////////////  RABANO //////////////////////////////
  this.i++
if(this.i==0)
this.titulo = "RABANO",
this.texto=" Los rábanos son bajos en calorías y una buena fuente de vitamina C, fibra y otros nutrientes esenciales. También contienen compuestos antioxidantes que pueden ser beneficiosos para la salud.";
else if(this.i==1)
this.titulo = "RABANO",
this.texto="Los rábanos son bajos en calorías y ricos en fibra, lo que puede ser beneficioso para la digestión y la salud del corazón. Además, su contenido de vitamina C contribuye al sistema inmunológico."
else if(this.i==2)
this.titulo = "RABANO",
this.texto="Los rábanos se consumen comúnmente crudos en ensaladas, pero también se pueden cocinar mediante asado, hervido o salteado. Además, se utilizan en diversas cocinas del mundo para agregar sabor y textura a platos."
else{
  this.titulo = "RABANO",
this.texto=" Los rábanos son bajos en calorías y una buena fuente de vitamina C, fibra y otros nutrientes esenciales. También contienen compuestos antioxidantes que pueden ser beneficiosos para la salud.";
this.i=0;
}
}

cambiaTexto4() :void{ //////////////////////////////  PAPALO //////////////////////////////
  this.i++
if(this.i==0)
this.titulo = "PAPALO",
this.texto="El papalo es una planta anual que pertenece a la familia Asteraceae. Sus hojas son grandes, dentadas y de color verde oscuro. La planta puede alcanzar alturas considerables y produce flores pequeñas y amarillas.";
else if(this.i==1)
this.titulo = "PAPALO",
this.texto=" En algunas culturas, el papalo se ha utilizado tradicionalmente con propósitos medicinales. Se le atribuyen propiedades diuréticas, digestivas y se cree que puede ayudar con problemas estomacales, además de 'papalo' y 'papaloquelite', la planta también puede tener otros nombres regionales, dependiendo del lugar. Por ejemplo, en algunas áreas de México, se le conoce como 'quintonil' o 'papaloquelite'."
else if(this.i==2)
this.titulo = "PAPALO",
this.texto=" El papalo tiene una importancia cultural significativa en la cocina tradicional mexicana y de otras regiones latinoamericanas. Su sabor distintivo y su versatilidad en la cocina lo han convertido en un ingrediente apreciado."
else{
  this.titulo = "PAPALO",
this.texto = "El papalo es una planta anual que pertenece a la familia Asteraceae. Sus hojas son grandes, dentadas y de color verde oscuro. La planta puede alcanzar alturas considerables y produce flores pequeñas y amarillas.";
this.i=0;
}
}

cambiaTexto5() :void{ //////////////////////////////  PAPA //////////////////////////////
  this.i++
if(this.i==0)
this.titulo = "PAPA",
this.texto="Las papas son una excelente fuente de carbohidratos, fibra dietética y vitamina C. También contienen vitaminas del grupo B, potasio y otros nutrientes, la mayoría de los nutrientes se encuentran en la piel, por lo que se recomienda consumirla con la piel siempre que sea posible.";
else if(this.i==1)
this.titulo = "PAPA",
this.texto="Una vez cocidas y enfriadas, las papas desarrollan almidón resistente, una forma de carbohidrato que actúa de manera similar a la fibra. Este tipo de almidón tiene beneficios para la salud digestiva."
else if(this.i==2)
this.titulo = "PAPA",
this.texto="La biodiversidad de las papas es clave para su supervivencia y resistencia a enfermedades. Mantener una diversidad genética en las variedades de papas cultivadas es esencial para enfrentar desafíos futuros."
else{
  this.titulo = "PAPA",
this.texto="Las papas son una excelente fuente de carbohidratos, fibra dietética y vitamina C. También contienen vitaminas del grupo B, potasio y otros nutrientes, la mayoría de los nutrientes se encuentran en la piel, por lo que se recomienda consumirla con la piel siempre que sea posible.";
this.i=0;
}
}

cambiaTexto6() :void{ //////////////////////////////  FRIJOL //////////////////////////////
  this.i++
if(this.i==0)
this.titulo = "FRIJOL",
this.texto=" Los frijoles son una excelente fuente de proteínas, especialmente para aquellos que siguen dietas vegetarianas o veganas. Contienen una buena cantidad de aminoácidos esenciales, los componentes básicos de las proteínas.";
else if(this.i==1)
this.titulo = "FRIJOL",
this.texto="Los carbohidratos presentes en los frijoles son principalmente carbohidratos complejos, lo que significa que proporcionan una liberación sostenida de energía y ayudan a mantener estables los niveles de azúcar en la sangre."
else if(this.i==2)
this.titulo = "FRIJOL",
this.texto=" Los frijoles son a menudo considerados una opción económica en comparación con algunas fuentes de proteínas animales, al tiempo que ofrecen un alto valor nutricional."
else{
  this.titulo = "FRIJOL",
this.texto=" Los frijoles son una excelente fuente de proteínas, especialmente para aquellos que siguen dietas vegetarianas o veganas. Contienen una buena cantidad de aminoácidos esenciales, los componentes básicos de las proteínas.";
this.i=0;
}
}


cambiaTexto7() :void{ //////////////////////////////  PLATANO //////////////////////////////
  this.i++
if(this.i==0)
this.titulo = "PLATANO",
this.texto="";
else if(this.i==1)
this.titulo = "PLATANO",
this.texto=""
else if(this.i==2)
this.titulo = "PLATANO",
this.texto=""
else{
  this.titulo = "PLATANO",
this.texto="";
this.i=0;
}
}


}
