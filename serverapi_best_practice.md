# Recommendations for Developers (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Recommendations for Developers | [](hook_scheme.md "Request Processing on the Server") [](serverapi_debug.md "Debugging") |
| --- | --- | --- |
| --- | --- |

Recommendations for Developers
This section contains general recommendations and solutions of typical issues programmers face when developing plugins.
Multithreading
When writing a multithreaded application, a programmer must take into account some specific features of MetaTrader 5 Server API:
  * Calling Server API methods (methods of interface IMTServerAPI, e.g. the functions [IMTServerAPI::Group*](serverapi_config_group.md "Groups"), [IMTServerAPI::Symbol*](serverapi_config_symbol.md "Symbols"), etc.) is thread safe. In using them, the does not need to ensure synchronization of access for simultaneous access to the same object of the server API from different threads. In other words, methods of the IMTServerAPI interface can be simultaneously called from different threads without additional synchronization.
  * Calling of interface methods (e.g. interfaces of configuration bases: [IMTConGroup](imtcongroup.md "IMTConGroup"), [IMTConSymbol](imtconsymbol.md "IMTConSymbol"), [IMTConGateway](imtcongateway.md "IMTConGateway"), etc.) is not thread safe. When accessing the same object from two threads, the programmer must ensure synchronization of access.
  * It is not guaranteed that hooks and events are called sequentially. Several hooks or events (even of the same type) can be called simultaneously, and each of them will be called in a separate thread. Accordingly, the handlers of (hooks) must be thread safe.
  * Synchronous calling from events/hooks of a client base (for example, [IMTUserSink](imtusersink.md "IMTUserSink")) to a trade base is forbidden in plugins. Violation of this rule may cause deadlocks and trade server crash.
  * Calling from trading events and hooks to the client base is allowed. All [IMTServerAPI::User*](serverapi_users.md "Clients") methods can be used except for those related to trading activity: [IMTServerAPI::UserAccountGet](imtserverapi_useraccountget.md "UserAccountGet"), [IMTServerAPI::UserDepositChange](imtserverapi_userdepositchange.md "UserDepositChange") and [IMTServerAPI::UserDepositChangeRaw](imtserverapi_userdepositchangeraw.md "UserDepositChangeRaw"). The [IMTServerAPI::UserAccountGet](imtserverapi_useraccountget.md "UserAccountGet") call is permitted only when accessing the account data for which the request was originally received.

All the plugin components must be implemented thread-safe, except for calls of IMTServerAPI methods.  
---  
Multithreaded interaction with the trade server
We strongly advise you against interfering with the server threads operation and interaction logic. In particular, we urge you not to implement your own synchronization primitives affecting the server threads operation (i.e. not to use them in the [hooks](serverapi_hooks.md "Hooks")).
When developing an application, keep in mind the following:
  * The unit of grouping data on client's open orders and positions is a client group. It manages client's open orders and positions, as well as margin status. Each group has its own synchronization primitive.
  * Trading bases (open orders, history orders, deals, positions) also feature their own synchronization primitives.
  * In general, requests are handled sequentially by a group of threads: initial control, routing and execution ones. When executing tasks, these threads access the corresponding client groups using synchronization primitives (securing exclusive access — lock) among other things.
  * Incoming quotes as well as trade symbol and group changes are handled by a separate thread pool. When executing tasks, these threads also access the corresponding client groups using synchronization primitives among other things.
  * All incoming trading executions ([IMTExecution](imtexecution.md "IMTExecution")) of gateways are put in a separate queue and processed by a separate thread. When handling execution, this thread accesses the corresponding client groups using synchronization primitives. Trading executions are handled by the thread sequentially in the order of their receipt.
  * A significant number of events and hooks are called under the lock, including the lock of the group synchronization primitive and the lock of a certain database (orders, positions, deals).
  * The entire interaction of trading and client databases is unidirectional - the trading base always refers to the client base, but not vice versa.

In order to avoid deadlocks when working from trading events and hooks, do the following:
  * Minimize direct (receiving data) and indirect (calculating a margin for a certain request, etc.) access to the data located in other groups: client's open orders, positions and trading account data.
  * Minimize the use of your custom synchronization primitives.
  * Do not try to directly control the interaction of server internal threads by explicitly stopping them or applying synchronization primitives.
  * The hooks and client base events (for example, [IMTUserSink::OnUser*](imtusersink_onuseradd.md "OnUserAdd"), [IMTUserSink::HookUser*](imtusersink_hookuseradd.md "HookUserAdd")) should not contain calls of the API methods associated with the trading databases (for example, [IMTServerAPI::PositionGet](imtserverapi_positionget.md "PositionGet")).
  * In [IMTDealSink](imtdealsink.md "IMTDealSink") events, it is only allowed to use synchronous calls of methods changing, creating and deleting only those deals which are in the same groups as the deal for which the event was received. In all other cases, you should use asynchronous calls — API methods should be called in a separate thread, and not in the thread that triggers the events of the deal database.

Memory Management
The correct approach to the use of memory is one of the key points in the development of plugins. There are the following requirements for working with memory:
  * Since the DLL modules of plugins work in the address space of the server, the plugin must be memory efficient. In addition, the plugin should have limited memory re-allocation to prevent it from too much fragmentation.
  * All interface objects are allocated using the Create methods and removed using the Release methods.
  * In cases where the API itself allocates memory (e.g., the function [IMTServerAPI::UserLogins](imtserverapi_userlogins.md "UserLogins"), which returns a dynamic array of clients from the specified group), it is necessary to free the memory using the method [IMTServerAPI::Free](imtserverapi_free.md "Free"). Pair to the method IMTServerAPI::Free is the method [IMTServerAPI::Allocate](imtserverapi_allocate.md "Allocate"), which allows to allocate memory.

Working with the configuration base and database interfaces
When working with [configuration base](reference_configurations.md "Configuration Interfaces") and [database](reference_bases.md "Database Interfaces") interfaces, please consider the following features:
  * Any *Add, *Update, *Delete and *Clear methods of these interfaces only affect the appropriate local object. To send changes to a server, you should call the corresponding *Add or *Update method of the Server API. For example, the [IMTConGroup::SymbolUpdate](imtcongroup_symbolupdate.md "SymbolUpdate") method only updates a symbol configuration in the group object. To send these changes to a server, you should call the [IMTServerAPI::GroupAdd](imtserverapi_groupadd.md "GroupAdd") method.

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