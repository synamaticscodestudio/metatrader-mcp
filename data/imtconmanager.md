# IMTConManager (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers")/ IMTConManager | [](config_manager.md "Managers") [](imtconmanager_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConManager
The IMTConManager contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconmanager_release.md "Release") | Delete the current object. |
| [Assign](imtconmanager_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconmanager_clear.md "Clear") | Clear an object. |
| [Login](imtconmanager_login.md "Login") | Get and set the login of a manager. |
| [Mailbox](imtconmanager_mailbox.md "Mailbox") | Get and set the name of a manager's mailbox in the internal mail system. |
| [Server](imtconmanager_server.md "Server") | Get and set the ID of the trade server, to which the manager belongs. |
| [LimitLogs](imtconmanager_limitlogs.md "LimitLogs") | Get and set the time period of system logs available to a manager. |
| [LimitReports](imtconmanager_limitreports.md "LimitReports") | Get and set the time period of reports available to a manager. |
| [Right](imtconmanager_right.md "Right") | Get and set the rights of a manager. |
| [GroupAdd](imtconmanager_groupadd.md "GroupAdd") | Add a group of accounts that the manager will process. |
| [GroupUpdate](imtconmanager_groupupdate.md "GroupUpdate") | Modify a group of accounts, which is processed by the manager, at the specified position in the list. |
| [GroupShift](imtconmanager_groupshift.md "GroupShift") | Move a group of accounts, which is processed by the manager, in the list of groups. |
| [GroupDelete](imtconmanager_groupdelete.md "GroupDelete") | Delete a group of accounts processed by the manager, by its index |
| [GroupTotal](imtconmanager_grouptotal.md "GroupTotal") | Get the number of entries in the list of groups processed by a manager. |
| [GroupNext](imtconmanager_groupnext.md "GroupNext") | Get a group processed by the manager, at a specified position in the list. |
| [AccessAdd](imtconmanager_accessadd.md "AccessAdd") | Create a range of IP addresses, from which a manager is allowed to connect to the platform. |
| [AccessUpdate](imtconmanager_accessupdate.md "AccessUpdate") | Modifies a range of IP addresses, from which a manager is allowed to connect to the platform, based on its position in the list. |
| [AccessDelete](imtconmanager_accessdelete.md "AccessDelete") | Delete a range of IP addresses, from which a manager is allowed to connect to the platform, based on its position in the list. |
| [AccessShift](imtconmanager_accessshift.md "AccessShift") | Move a range of IP addresses, from which a manager is allowed to connect to the platform, in the list. |
| [AccessTotal](imtconmanager_accesstotal.md "AccessTotal") | Get the number of ranges of IP addresses, from which a manager is allowed to connect to the platform. |
| [AccessNext](imtconmanager_accessnext.md "AccessNext") | Get a range of IP addresses, from which a manager is allowed to connect to the platform, based on its position in the list. |
| [ReportAdd](imtconmanager_reportadd.md "ReportAdd") | Create a report access permission for a manager. |
| [ReportUpdate](imtconmanager_reportupdate.md "ReportUpdate") | Update a report access permission for a manager. |
| [ReportDelete](imtconmanager_reportdelete.md "ReportDelete") | Delete a report access permission for a manager. |
| [ReportShift](imtconmanager_reportshift.md "ReportShift") | Shift a report access permission for a manager. |
| [ReportTotal](imtconmanager_reporttotal.md "ReportTotal") | Get the number of report access permissions that the manager has. |
| [ReportNext](imtconmanager_reportnext.md "ReportNext") | Get a manager's report access permission based on the permission position in the list. |

The IMTConManager class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnManagerRights](imtconmanager_enum.htm#enmanagerrights) | Manager's permissions. |
| [EnManagerRightFlags](imtconmanager_enum.htm#enmanagerrightflags) | A flag of permission/prohibition. |
| [EnManagerLimit](imtconmanager_enum.htm#enmanagerlimit) | Limit of access to system logs. |