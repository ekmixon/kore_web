# Kore Web

User interface for kore framework.  User will deploy kore_collector to a single system.  
Kore Collector will be used to grab the data from each data source and push to Kore Aggregator.
Kore Aggregator will process the data into Neo4J and yield an entity and relationships search.

Kore Web will be where the analyst can perform basic search and interact with common addons
such as BloodHound for investigations.

## Requirements

- Python 3 with requirements.txt installed
- Kore Aggregator installed
- Kore Web configured to talk to Neo4J 


