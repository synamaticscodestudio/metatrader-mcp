# MetaTrader 5 API (MetaTrader5SDK)

|  | MetaTrader 5 API | [](getting_started.md "Getting Started") |
| --- | --- | --- |
| --- | --- |

MetaTrader 5 Platform API Guide
The MetaTrader 5 platform features open APIs which allow further expanding the platform capabilities, integrating with other trading systems and back-office components, as well as customizing the platform to fit specific business needs.
The platform provides five APIs and an additional option enabling real-time data export to an SQL database.
| [Server API](serverapi.md "Server API") C++ | Set of tools for expanding functionality and customizing the MetaTrader 5 server operation logic: custom commissioning and swap calculation algorithms, routing of financial operations, and more. [Ready-made examples](serverapi_examples.md "Ready-made Examples") for expanding the Web and Manager API protocols |
| --- | --- |
| --- | --- | --- |
| [Manager API](managerapi.md "Manager API") C++, C#, .NET, Python | Set of functions for developing and editing accounts, depositing and withdrawing funds, processing trade requests and managing the server settings. The API is provided as C++ interfaces (32 and 64-bit DLL library) with [sample source codes](managerapi_examples.md "Ready-made Examples"). |
| [Gateway API](gatewayapi.md "Gateway API") C++, C#, .NET | Allows for the development of custom [gateways](gatewayapi_develop_gateway.md "Developing and Debugging Gateways") and [data sources](gatewayapi_develop_datafeed.md "Developing Data Feeds") for integrating the MetaTrader 5 platform with other trading systems. The main objectives are executing and synchronizing orders and positions with an external system, developing and modifying [trading symbols](gatewayapi_translation.md "Symbol and Price Translation"), providing quotes, etc. |
| [Report API](reportapi.md "Report API") C++ | Set of tools for developing custom MetaTrader 5 Manager reports. To use these features, you need to write specially designed reports modules as DLLs. The API supports [multithreading](reportapi_multithreading.md "Multithreading") and [memory management](reportapi_memory_management.md "Memory Management"), allows generation of [HTML reports](reportapi_html.md "HTML Reports") and contains [ready-made application examples](reportapi_examples.md "Ready-made Examples"). |
| [Web API](webapi.md "Web API") Any language | Provides a Rest API for integrating the MetaTrader 5 platform with web resources and other services of a company. The API allows creating and editing client trade accounts via a website, as well as deposit and withdraw funds directly from a trader's room in real time |
| [Export to SQL](sql_export.md "SQL Export") MySQL, MS SQL, Oracle, FireBird | The standard real-time export of data to an SQL database allows for generating various reports: |

  * Matching orders, trades and positions with external trading systems
  * Reports sent to regulators
  * Risk management reports

This functionality is enabled by simple specification of settings for connection to DBMS via MetaTrader 5 Administrator  
MetaTrader 5 API additionally provides interfaces for accessing [configurations](reference_configurations.md "Configuration Interfaces") and [databases](reference_bases.md "Database Interfaces"), assistant [tools](reference_tools.md "Tools") for facilitating routine operations, and [structures](reference_structures.md "Structures") for transmitting data.
© 2000-2026, [MetaQuotes Ltd](https://www.metaquotes.net/ru)