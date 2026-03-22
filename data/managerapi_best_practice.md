# Recommendations for Developers (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API")/ Recommendations for Developers | [](managerapi_purpose.md "Purpose of Manager API") [](managerapi_preparing.md "Getting Started") |
| --- | --- | --- |
| --- | --- |

Recommendations for Developers
This section contains general recommendations and solutions of typical issues programmers face when developing applications via Manager API.
Principles of Applications
In the work of applications, there are the following main steps:
  * Loading MT5APIManager.dll using the [CMTManagerAPIFactory::Initialize](cmtmanagerapifactory_initialize.md "Initialize") method of he Manager API factory.
  * Creating the manager or administrator interface using the [CMTManagerAPIFactory::CreateManager](cmtmanagerapifactory_createmanager.md "CreateManager") or [CMTManagerAPIFactory::CreateAdmin](cmtmanagerapifactory_createadmin.md "CreateAdmin") method respectively.
  * Verifying that the versions of the main header file MT5APIManager.h (the version parameter of one of the interface creation methods) and of the loaded DLL (passed by [CMTManagerAPIFactory::Version](cmtmanagerapifactory_version.md "Version")) match.
  * Connecting an application to a server with the Connect method, using the created [administrator](imtadminapi_connect.md "Connect") or [manager](imtmanagerapi_connect.md "Connect") interface, as well as details of the manager account created on the server.
  * After the work is completed, the application is disconnected from the server using the Disconnect method.
  * Next the created interface is deleted using the Release method.
  * The last stage is unloading the DLL of the manager API from the memory using the [CMTManagerAPIFactory::Shutdown](cmtmanagerapifactory_shutdown.md "Shutdown") method.

  * With the MetaTrader 5 Manager API, you can develop 32- and 64-bit applications using the appropriate DLLs included into the installation package.

  * Applications are only developed for Windows. Manager API DLLs are not suitable for developing applications for Linux or other operating systems.

  
---  
Application Requirements
When developing applications, it is necessary to meet the following requirements:
  * An application should be as efficient in memory usage as possible.
  * An application should fragment memory as little as possible.
  * An application should not cause memory leaks.
  * An application must quickly return control from event handlers.
  * During calls of any *Request methods (such as [IMTManagerAPI::SymbolRequest](imtmanagerapi_symbolrequest.md "SymbolRequest") or [IMTManager::GroupRequest](imtmanagerapi_grouprequest.md "GroupRequest")), information is requested straight from the server. Too frequent requests can lead to the activation of the anti flood control system, as a result of which connection between the Manager API and the server can be lost. In order not to overload the server, control the frequency of these method calls and, if possible, use *Get methods, which receive information from the local application cache.
  * All methods of event handling interfaces (IMT*Sink) are called from the network thread. Therefore, any methods of the same manager or administrator interface, which send commands to the trade server (such as *Request, *Update, *Delete, *Send, etc.) are prohibited in these interfaces. Only methods working with local data (*Get, *Next, *Total, etc.) can be called from event handlers.

Working with the configuration base and database interfaces
When working with [configuration base](reference_configurations.md "Configuration Interfaces") and [database](reference_bases.md "Database Interfaces") interfaces, please consider the following features:
  * Any *Add, *Update, *Delete and *Clear methods of these interfaces only affect the appropriate local object. To send changes to a server, you should call the corresponding *Add or *Update method of the Manager API. For example, the [IMTConGroup::SymbolUpdate](imtcongroup_symbolupdate.md "SymbolUpdate") method only updates a symbol configuration in the group object. To send these changes to a server, you should call the [IMTAdminAPI::GroupUpdate](imtadminapi_groupupdate.md "GroupUpdate") method.

Escaping special characters
When using special characters = (equal sign), | (vertical bar), \ (slash) and line feed as method parameter values, you must escape them with the \ (slash) character.
If the \ (slash) character is not followed by special characters listed above, then it is processed as is.  
---  
The table below shows examples of processing escaped characters on a trading server.
| Character sent to the server | character recognized by the server |
| --- | --- |
| --- | --- |
| \= | = |
| \ |  |  |
| \\(line feed) | (line feed) |
| \\\ | \ |

Using Logs to Analyze Possible Problems
Logs assist in tracking application events and errors. Use Logger* functions available in the [Administrator](imtadminapi_loggerout.md "LoggerOut") and [Manager interfaces](imtmanagerapi_loggerout.md "LoggerOut") in crucial blocks of your application code to log information about its operation. This will make troubleshooting much easier.
By default, Manager API applications store logs under the \logs subdirectory of the directory from which they are launched. For example, if your application runs in the 'C:\ManagerAPI solution' directory, then the log will be located in 'C:\ManagerAPI solution\logs'. The files have .log extensions and are saved separately for each day. The data storage directory can be overridden when creating interfaces using the [CreateAdmin](cmtmanagerapifactory_createadmin.md "CreateAdmin") and [CreateManager](cmtmanagerapifactory_createmanager.md "CreateManager") methods.