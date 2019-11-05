import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native'
import {
  Surface,
  Button
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'



const styles = require('./style.js')

class   Instruction extends Component {

  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
         <View style={styles.content}>
          <Surface style={styles.card}>
          <View style={styles.contentImg}>
            <Image style={styles.img} />
          </View>
            <View style={styles.contentText}>
              <Text style={styles.title}>
                titulo del producto
              </Text>
              <Text style={styles.description}>
                descripcion del producto dededdededseefvgrekgrg
              </Text>
              <View style={styles.dateContent}>
                <Text style={styles.descriptionBold}>
                  La fecha de compra fue:
                </Text>
                <Text style={styles.description}>
                  34/45/2020
                </Text>
              </View>
              <View style={styles.dateContent}>
                <Text style={styles.descriptionBold}>
                  La fecha máxima de garantía es:
                </Text>
                <Text style={styles.description}>
                  34/67/2020
                </Text>
              </View>
            </View>
            <View style={styles.contentImg}>
              <Image style={styles.img} />
              <View style={styles.download}>
              <Icon
                name='vertical-align-bottom'
                size={20}
                color='#6f6f6f'
              />
              <Text style={styles.downloadText}>
                Descargar ticket
              </Text>
              </View>

            </View>
            <Text style={styles.folio}>
              Folio
            </Text>
            <TextInput
             placeholder='D28A-26DW-CYJ9-IMA3'
             style={styles.KeyMembership}
            />
            <Text style={styles.title}>
              Instrucciones
            </Text>
            <Text style={styles.description}>
{`Para proceder a la reparación de un ARTÍCULO, el CLIENTE deberá:

1.-Llamar al teléfono de atención al cliente, en un horario de lunes a domingo de 10:00 a 21:00 horas (hora de la Ciudad de México), excepto días feriados oficiales.

2.-Tener el ticket de compra del artículo y el contrato de su programa de servicio al momento de la llamada.

3.-Describir brevemente la falla del artículo a la operadora, e informar si el artículo fue previamente reparado durante la garantía original del fabricante;
La operadora registrará el número de referencia del servicio y le indicará a qué centro de servicio acudir para la revisión y diagnóstico del artículo por un técnico calificado y, en su caso, proceder a la reparación. El centro de servicio será el que se encuentre más cercano a su domicilio o el que el cliente elija de entre las opciones que le indique la operadora.

4.-Acudir al centro de servicio que le haya indicado la operadora, con el ticket de compra del artículo,  el contrato de su programa de servicio y el artículo al cual le realizarán un diagnóstico (sin costo para el cliente) en el que detalle el nombre, dirección y teléfono del cliente, descripción del artículo, número de serie, condiciones físicas en que se recibe el artículo y la falla que presente.
La reparación se realizará usando refacciones y/o materiales nuevos, apropiados al modelo y marca del artículo.

5.-El centro de servicio entregará el artículo en condiciones de uso, previa prueba de funcionamiento en presencia del cliente.

*Sólo los artículo siguientes serán reparados en el domicilio del cliente: refrigeradores, congeladores, lavadoras, centros de lavado, lavavajillas, secadoras, estufas, caminadoras, televisores y pantallas a partir de 32 pulgadas. En estos casos, el personal que se presente al domicilio del cliente contará con los medios de identificación adecuados.`}
            </Text>
            <Text style={styles.descriptionBold}>
              TERMINOS DE LA GARANTIA
            </Text>
            <Text style={styles.descriptionBold}>
              TERMINOS Y CONDICIONES
            </Text>
          </Surface>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}

export default   Instruction
