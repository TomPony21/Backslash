# Introduction

This repository contains a application designed to traverse a directed graph and extract branch routes. The graph is represented as an object where each node has a set of properties and edges linking it to other nodes.


## `Decisions and Assumptions`

In-Memory Storage: I chose to use in-memory storage for simplicity and to get the project off the ground quickly , This might not be suitable for large persistent datasets. 

Route Filtering: getRelevantRoutes filters routes based on conditions. This is a centralized function for route related queries, which is good for maintainability.
Also assume of new filter operands will be infrequently added, making it feasible to update a mapping for each.


## `Limitations`

Scalability and High availability: The in-memory database limits the scalability and the availability of the application.
Use instead for High availability database designed for handling graph-based operations, Also using updating cache to save the routes results.

Route Filtering: Every time that I need a new type of operand (i.e.,"OR"), I have to manually update the function to understand how to handle that new operand.

Testing: Add a comprehensive suite of unit and integration tests.


## `routes`

This set of routes deals with fetching various kinds of route data derived from a graph. Each route performs a different query.

### `GET /`

This route returns all routes available.

### `GET /publicRoutes`

This route returns Routes that start in a public service.

### `GET /endSinkRoutes`

This route returns routes that end in a sink node.

### `GET /hasVulnerabilitiesRoutes`

This route returns routes that have a vulnerability in one of the nodes.

## `graphRoutes`

This set of routes deals with the raw graph data.

### `GET /graphData`

This route returns the raw graph data.
