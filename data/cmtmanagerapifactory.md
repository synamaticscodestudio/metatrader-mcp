# CMTManagerAPIFactory (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API")/ CMTManagerAPIFactory | [](mtadmincreateext.md "MTAdminCreateExt") [](cmtmanagerapifactory_initialize.md "Initialize") |
| --- | --- | --- |
| --- | --- |

CMTManagerAPIFactory
For easy access to the IMTManagerAPI interface, a [factory of interfaces](cmtmanagerapifactory.md "CMTManagerAPIFactory") is implemented in the MT5Manager.h file. The factory automatically loads the appropriate library (32/64-bit) Manager API and provides access to exported functions.
The Manager API factory performs the basic functions of applications — initialization and deinitialization, as well as creation of interfaces of the Manager API. It contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Initialize](cmtmanagerapifactory_initialize.md "Initialize") | Initialize the Manager API. |
| [Shutdown](cmtmanagerapifactory_shutdown.md "Shutdown") | Unload DLL from the Manager API. |
| [CreateManager](cmtmanagerapifactory_createmanager.md "CreateManager") | Create the manager interface. |
| [CreateAdmin](cmtmanagerapifactory_createadmin.md "CreateAdmin") | Create the administrator interface. |
| [Version](cmtmanagerapifactory_version.md "Version") | Get the version of the Manager Manager API. |
| [LicenseCheckAdmin](cmtmanagerapifactory_licensecheckadmin.md "LicenseCheckAdmin") | Check whether the Manager API application use is authorized. |
| [LicenseCheckManager](cmtmanagerapifactory_licensecheckmanager.md "LicenseCheckManager") | Check whether the Manager API application use is authorized. |

Using factories in application development is optional. You can use your own implementation of corresponding functions.