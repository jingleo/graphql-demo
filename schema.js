//schema.js
var graphql = require('graphql')

var GraphQLObjectType = graphql.GraphQLObjectType
var GraphQLSchema = graphql.GraphQLSchema
var GraphQLInt = graphql.GraphQLInt

var count = 0;

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        //Add description
        description: 'The count!',
        resolve: function() {
          return count;
        }
      }
    }
  }),
  //Note：this is the newly added mutation query
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Update the count',
        resolve: function() {
          count += 1;
          return count;
        }
      }
    }
  })
});

module.exports = schema
