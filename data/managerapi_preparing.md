# Getting Started (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API")/ Getting Started | [](managerapi_best_practice.md "Recommendations for Developers") [](managerapi_examples.md "Ready-made Examples") |
| --- | --- | --- |
| --- | --- |

Preparation for work
To work through the MetaTrader 5 Manager API, prepare a special account on the trade server. The account be used to authorize the Manager API client using the [IMTAdmin::Connect](imtadminapi_connect.md "Connect") and[IMTManager::Connect](imtmanagerapi_connect.md "Connect") methods.
  * [Creating an account](managerapi_preparing.htm#account_create)
  * [Configure access to symbols](managerapi_preparing.htm#symbols)
  * [Manager configuration](managerapi_preparing.htm#manager_configuration)
  * [Configuring the Access Server](managerapi_preparing.htm#access)

Creating an account
To create an account, navigate to the relevant MetaTrader 5 Administrator section and click "Add". The account must be created in the Managers group.
Operation with the [debug server version](serverapi_debug.md "Debugging") always uses password "Manager" regardless of the password actually set for the account.  
---  
Configure access to symbols
The list of [symbols](webapi_symbols.md "Symbols") for which the Manager API client can receive information is determined by the settings of the group to which the manager account belongs.
Manager configuration
When creating an account in the Managers group, MetaTrader 5 Administrator immediately creates a manager configuration based on this account. This is a special account add-on over extending account permissions.
Open this configuration under the "Clients and accounts \ Managers" section. The configuration can be found by the account number or by name.
On the Common tab, specify [groups](webapi_groups.md "Groups") with which the Manager API client can work. In fact, they define access to accounts and trading operations.
On the Permissions tab, configure access restrictions for the Manager API client.
The manager account used for the Manager API client has the following permissions:
  * Connect using MetaTrader 5 Administrator — allows [administrator connection](imtadminapi.md "Administrator Interface") to the trading server, used in the Manager API.
  * Connect using MetaTrader 5 Manager — allows [manager connection](imtmanagerapi.md "Manager Interface") to the trading server, used in the Manager API. The permission must be enabled.
  * Configuration setup — determines the type of configurations which can be changed via the Manager API.
  * Send email — allows the account to [send emails](imtmanagerapi_mail.md "Mail Database Functions") via the internal mail system.
  * Send news — allows the account to [send newsletters](imtmanagerapi_news.md "Functions").
  * Accountant — enables access to perform [balance operations](imtmanagerapi_dealerbalance.md "DealerBalance") on client account.
  * Access accounts — permission to [request account information](imtmanagerapi_user.md "User Functions") (without access to personal data).
  * Access account personal details — permission to view the following personal details of accounts:

  * Name
  * Bank Account
  * Phone Password
  * Country
  * City
  * State
  * Zip/Postal code
  * Address
  * Phone
  * Email
  * Comments
  * ID
  * Status
  * API User Data
  * Trading account numbers in external systems
  * Change accounts — permission to [add](imtmanagerapi_useradd.md "UserAdd") and [edit](imtmanagerapi_userupdate.md "UserUpdate") accounts.
  * Delete accounts — permission to [delete](imtmanagerapi_userdelete.md "UserDelete") accounts.
  * Access orders and positions — permission to view client [orders](imtmanagerapi_trading_order.md "Orders"), [deals](imtmanagerapi_trading_deal.md "Deals") and [positions](imtmanagerapi_trading_position.md "Positions").
  * Edit orders, positions and deals — permission to edit the relevant trading operations.
  * Delete orders, positions and deals — permission to edit the relevant trading operations.
  * Back Office — access to the [client](imtmanagerapi_clients.md "Clients") database.
  * Subscriptions — access to the [subscriptions](imtmanagerapi_subscription.md "Subscriptions") service.

On the "List of allowed IP addresses" tab, you can further restrict the Manager API client connection by IP addresses.
Configuring the Access Server
To allow connections to the trading platform via the Manager API, enable the corresponding option in the access server settings: