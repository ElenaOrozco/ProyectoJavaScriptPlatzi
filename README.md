# Platzom 

Platzon es un idioma invertando para el curso de Platzi [Fundamentos de JavaScript](https://platzi.com/clases/fundamentos-javascript/concepto/creando-un-paquete-para-npm/creando-muestro-paquete/material/)

## Descripcion del idioma
-Si la palabra termina en ar se le quitan esos 2 caracteres 
-Si la palabra inicia con Z, se le añade "pe" al final 
-Si la palabra tiene 10 o mas letras se debe partir a la mita y unir con un guion 
-Por ultimo, si es un palindromo, ninguna de las anteriores cuenta y se devuelve la misma palabra intercalano mayusculas y min 

## Instalación

```
npm install platzom
```
## Uso

```
import platzom from 'platzom'

platzom ("programar") //Programar
platzom ("Zorro") //Zorrope
platzom ("Zarpar") //Zarpe
platzom("abecedario") //abece-dario
platzom("sometemos")

```
## Créditos
- [Sacha Lifszyc](https://twiter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)