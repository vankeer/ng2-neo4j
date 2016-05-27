# ng2-neo4j

Experimental Angular 2 models and services for connecting with the [Neo4j REST API](http://neo4j.com/docs/rest-docs/current/).

In development.

## Installation

Requires `tsc` for postinstall.

```bash
npm install
```

## Configuration

You have to configure `Neo4jSettings` in your bootstrap:

```javascript
provide('Neo4jSettings', {useValue: {
    endpoint: 'http://localhost:7474',
    username: 'neo4j',
    password: 'neo4j42'
}})
```