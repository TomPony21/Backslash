# Introduction

This repository contains a application designed to traverse a directed graph and extract branch routes. The graph is represented as an object where each node has a set of properties and edges linking it to other nodes.


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
