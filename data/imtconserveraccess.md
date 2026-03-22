# IMTConServerAccess (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network")/ IMTConServerAccess | [](imtconbackupfolder_flags.md "Flags") [](imtconserveraccess_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess
The IMTConServerAccess interface contains methods for controlling the settings specific to the access servers.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconserveraccess_release.md "Release") | Delete the current object. |
| [Assign](imtconserveraccess_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconserveraccess_clear.md "Clear") | Clear an object. |
| [Priority](imtconserveraccess_priority.md "Priority") | Get and set the base priority of the Access Server. |
| [PriorityCurrent](imtconserveraccess_prioritycurrent.md "PriorityCurrent") | Get the current priority of the Access Server. |
| [AccessFlags](imtconserveraccess_accessflags.md "AccessFlags") | Get and set additional parameters of the Access Server. |
| [AccessMask](imtconserveraccess_accessmask.md "AccessMask") | Get and set the allowed types of connection to the Access Server. |
| [NewsMax](imtconserveraccess_newsmax.md "NewsMax") | Get and set the maximum number of news that can be stored on the Access Server. |
| [AntifloodEnabled](imtconserveraccess_antifloodenabled.md "AntifloodEnabled") | Get and set the state of antiflood control. |
| [AntifloodConnects](imtconserveraccess_antifloodconnects.md "AntifloodConnects") | Get and set the maximum number of connections from one IP address for a certain period of time, after which the address is temporarily blocked. |
| [AntifloodErrors](imtconserveraccess_antiflooderrors.md "AntifloodErrors") | Get and set the maximum number of incorrect connections, after which the IP address is temporarily blocked. |
| [PointsAdd](imtconserveraccess_pointsadd.md "PointsAdd") | Add an access point. |
| [PointsUpdate](imtconserveraccess_pointsupdate.md "PointsUpdate") | Update of the access point at the specified position in the list. |
| [PointsShift](imtconserveraccess_pointsshift.md "PointsShift") | Move an access point in the list. |
| [PointsDelete](imtconserveraccess_pointsdelete.md "PointsDelete") | Delete an access point by the index. |
| [PointsClear](imtconserveraccess_pointsclear.md "PointsClear") | Clear the list of access points. |
| [PointsTotal](imtconserveraccess_pointstotal.md "PointsTotal") | Get the number of access points of the Access Server. |
| [PointsNext](imtconserveraccess_pointsnext.md "PointsNext") | Get an access point by the index. |
| [BindingsAdd](imtconserveraccess_bindingsadd.md "BindingsAdd") | Add a binding. |
| [BindingsUpdate](imtconserveraccess_bindingsupdate.md "BindingsUpdate") | Update the binding at the specified position in the list. |
| [BindingsShift](imtconserveraccess_bindingsshift.md "BindingsShift") | Move a binding in the list. |
| [BindingsDelete](imtconserveraccess_bindingsdelete.md "BindingsDelete") | Delete a binding by the index. |
| [BindingsClear](imtconserveraccess_bindingsclear.md "BindingsClear") | Clear the list of bindings. |
| [BindingsTotal](imtconserveraccess_bindingstotal.md "BindingsTotal") | Get the number of bindings of the Access Server. |
| [BindingsNext](imtconserveraccess_bindingsnext.md "BindingsNext") | Get a binding by the index. |
| [ServersAdd](imtconserveraccess_serversadd.md "ServersAdd") | Add a trade server connection to which will be implemented through this Access Server. |
| [ServersUpdate](imtconserveraccess_serversupdate.md "ServersUpdate") | Update a trade server connection to which will be implemented through this Access Server. |
| [ServersShift](imtconserveraccess_serversshift.md "ServersShift") | Move a trade server connection to which is implemented through this Access Server. |
| [ServersDelete](imtconserveraccess_serversdelete.md "ServersDelete") | Delete a trade server connection to which is implemented through this Access Server, from the list. |
| [ServersClear](imtconserveraccess_serversclear.md "ServersClear") | Clear the list of trading servers connection to which is implemented through this Access Server. |
| [ServersTotal](imtconserveraccess_serverstotal.md "ServersTotal") | Get the number of trade servers connection to which will be implemented through this Access Server. |
| [ServersNext](imtconserveraccess_serversnext.md "ServersNext") | Get a trade server connection to which is implemented through this Access Server, by the index. |

The IMTConServerAccess class contains the following methods:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnAccessMask](imtconserveraccess_enum.md "Enumerations") | Allowed types of connection. |
| [EnServerPriority](imtconserveraccess_enum.htm#enserverpriority) | Priority of the Access Server. |