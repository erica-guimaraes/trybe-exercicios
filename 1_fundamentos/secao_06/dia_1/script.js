// Exercício 2
// Pedido de clientes
// Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. 
// Para isso, use o seguinte código:

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };

// Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

  const customerInfo = (order) => {
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}.`
  };
//   console.log(customerInfo(order));
  customerInfo(order);
  
// Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.

order.otherName = 'Luiz Silva';
order.payment.total = 'R$ 50,00';

  const orderModifier = (order) => {
    return `Olá ${order.otherName}, o total do seu pedido de marguerita, peperoni e ${order.order.drinks.type} é ${order.payment.total}.`;
  };
  
  console.log(orderModifier(order));
  
  orderModifier(order);
