# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### TICKET 01: `Business rule planning and design to generate custom IDs`

- Description:
```
- Define the necessary strategies for the implementation and changes in the data structure;
- Validate the impacts related to the addition of new fields and changes to existing tables and functionalities in the relationship with the Facilities and Agent tables;
- Validate the form of a retroactive process to ensure the persistence and updating of new IDs with older registered items.
```

- Acceptance criteria:
```
- Clear documentation and a solid strategy that addresses all aspects of implementation.
```

- Implementation details:
```
- It needs to be defined where and how the IDs will be saved;
- How will be the relationship between Facilities and Agent;
- How the retroactive process will be carried out for items already registered in the Facilities and Agent list.
```

- Delivery time: `1 day`
- Effort Points: `4/10`


### TICKET 02: `Creation of the functionality to generate customizable IDs in the backend`

- Description:
```
- Create a new functionality to generate a unique customizable ID.
```

- Acceptance criteria:
```
- The ID needs to be generated as a string;
- Must have a specific minimum size;
- Must accept creation modes, example: separation mode, uppercase and/or lowercase characters, if numbers are accepted;
- The ideal is to accept a limitation of character types, for example: text, number, hyphen and underscore;
- Successful unit tests;
- Ensure integration, without interruptions in the existing flow of the application.
```

- Implementation details:
```
- Create functionality to generate customizable IDs;
- Ensure uniqueness among a massive amount that can be generated.
```

- Delivery time: `2 days`
- Effort Points: `7/10`


### TICKET 03: `Integrate the custom ID generator with the Facilities and Agent models.`

- Description:
```
- Integrate models to generate and relate to the new ID generation functionality;
- Create the process for updating existing item data.
```

- Acceptance criteria:
```
- Successful integration creation;
- Update old item data without affecting application workflow;
- Unit tests for validation for integration.
```

- Implementation details:
```
- Creation of integration with validation through successful unit tests;
- Carry out the process of updating the data of old items, without affecting the application with operating errors and response times.
```

- Delivery time: `2 days`
- Effort Points: `6/10`


### TICKET 04: `Integration of the new functionality to generate customizable IDs in the frontend`

- Description:
```
- Add the necessary options and functionalities to be able to use the new functionality to generate customizable IDs in the web application, with the possibility of creating and editing the data and relationships between the Facilities and Agent models.
```

- Acceptance criteria:
```
- Successful unit tests;
- Intuitive user interface and without interruption in the existing flow of the application.
```

- Implementation details:
```
- It will be necessary to update the user interface to allow the addition and editing of IDs customized by the Facilities model and the correct relationship with the Agent model;
- It will also be necessary to update the report generation logic in order to use the new customizable IDs.
```

- Delivery time: `2 days`
- Effort Points: `6/10`


### TICKET 05: `E2e tests to ensure it works with the new customizable IDs.`

- Description:
```
- Test the functionality of generating and using the custom IDs of the Agent model by the Facilities model.
```

- Acceptance criteria:
```
- Successful unit and integration tests with no bugs or performance issues.
```

- Implementation details:
```
- Functionality needs to be carefully tested in different scenarios to ensure that it works correctly and without performance issues.
```

- Delivery time: `1 day`
- Effort Points: `4/10`
