# Managers (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Managers | [](imtconleveragesink_hookleveragedelete.md "HookLeverageDelete") [](imtconmanager.md "IMTConManager") |
| --- | --- | --- |
| --- | --- |

Configuration of Managers
Using the functions and interfaces described in this section, you can manage configurations of managers in the platform, as well as subscribe and unsubscribe from events associated with their change.
The following interfaces of manager settings are available:
  * [IMTConManager](imtconmanager.md "IMTConManager") — basic manager settings.
  * [IMTConManagerAccess](imtconmanageraccess.md "IMTConManagerAccess") — settings of IP address ranges from which the manager is allowed to connect to the platform.
  * [IMTConManagerReport](imtconmanagerreport.md "IMTConManagerReport") — manager access rights to server reports.
  * [IMTConManagerSink](imtconmanagersink.md "IMTConManagerSink") — events associated with changes in manager settings.

The below figure shows different elements of manager configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [Manager's login](imtconmanager_login.md "Login").
  2. [Manager's mailbox name](imtconmanager_mailbox.md "Mailbox").
  3. [Groups processed by a manager](imtconmanager_groupadd.md "GroupAdd").
  4. [Manager's rights](imtconmanager_right.md "Right").
  5. [The beginning of the range of addresses](imtconmanageraccess_from.md "From"), from which a manager is allowed to connect.
  6. [The end of the range of addresses](imtconmanageraccess_to.md "To"), from which a manager is allowed to connect.
  7. [Adding a range of allowed addresses](imtconmanager_accessadd.md "AccessAdd").
  8. [Deleting a range of allowed addresses](imtconmanager_accessdelete.md "AccessDelete").
