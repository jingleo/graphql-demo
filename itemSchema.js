//schema.js
var graphql = require('graphql')

var GraphQLObjectType = graphql.GraphQLObjectType
var GraphQLSchema = graphql.GraphQLSchema
var GraphQLInt = graphql.GraphQLInt

var ItemType = new GraphQLObjectType({
  name: "item",
  description: "item",
  fields: {
    id: {
      type: GraphQLString,
      description: "item id"
    },
    title: {
      type: GraphQLString,
      description: "item title"
    },
    price: {
      type: GraphQLString,
      description: "item price",
      resolve: function(root, param, context) {
        return (root.price/100).toFixed(2);
      }
    },
    pic: {
      type: GraphQLString,
      description: "item pic url"
    },
    promotion: {
      type: GraphQLInt,
      description: "promotion price"
    }
  }
});

var ItemSchema = new GraphQLSchema({
  query: {
    name: "ItemQuery",
    description: "query item",
    fields: {
      item: {
        type: ItemType,
        description: "item",
        args: {
          id: {
            type: GraphQLInt,
            required: true    //itemId required for query
          }
        },
        resolve: function(root, obj, ctx) {
          return yield ItemService(obj['id']);
        }
      }
    }
  }
});

module.exports = schema
