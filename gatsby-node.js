import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
    // 1. Get a template for this page
    const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
    // 2. Query all pizzas
    const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
    console.log(data);
    // 3. Loop over each pizza and create a page for that pizza
    data.pizzas.nodes.forEach((pizza) => {
        actions.createPage({
            // What is the URL for this new page??
            path: `pizza/${pizza.slug.current}`,
            component: pizzaTemplate,
            context: {
                slug: pizza.slug.current,
            },
        });
    });
}
async function turnToppingsIntoPages({ graphql, actions }) {
    console.log('turning the toppings into pages!!')
    // get the template
    const toppingTemplate = path.resolve('./src/pages/pizzas.js');
    // query all toppings
    const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
        }
      }
    }
  `);
    // createPage for that topping
    data.toppings.nodes.map((topping) => {
        console.log(`Creating page for topping `, topping.name);
        actions.createPage({
            path: `topping/${topping.name}`,
            component: toppingTemplate,
            context: {
                topping: topping.name,
                //TODO Regex for topping
                toppingRegex: `/${topping.name}/i`
            },
        })
    })
    // pass topping data to pizza.js 
}

export async function createPages(params) {
    // Create pages dynamically
    await Promise.all([
        turnPizzasIntoPages(params),
        turnToppingsIntoPages(params)
    ]);
    // 1. Pizzas
    // 2. Toppings
    // 3. Slicemasters
}