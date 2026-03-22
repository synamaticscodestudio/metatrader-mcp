# Common (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Common | [](reference_configurations.md "Configuration Interfaces") [](imtconcommon.md "IMTConCommon") |
| --- | --- | --- |
| --- | --- |

Common Configuration
The common configuration basically includes the information specified in the license, as well as the mode of the platform components update.
The following interfaces of common parameters are available:
  * [IMTConCommon](imtconcommon.md "IMTConCommon") — configure common platform parameters.
  * [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") — configure [account allocations](https://support.metaquotes.net/ru/docs/mt5/platform/administration/admin_accounts/account_allocation_groups).
  * [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement") — configure agreements for account allocations.
  * [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") — interface for handling common configuration change events.

The below figure shows different elements of the common configuration in MetaTrader 5 Administrator, to help you understand the purpose of the interfaces.
The following elements are shown above:
  1. [The name of the platform owner](imtconcommon_owner.md "Owner").
  2. [The full name of the platform](imtconcommon_namefull.md "NameFull").
  3. [License expiry date](imtconcommon_expirationlicense.md "ExpirationLicense").
  4. [Platform limit on groups](imtconcommon_limitgroups.md "LimitGroups").
  5. [The number of real clients in the platform](imtconcommon_totalusersreal.md "TotalUsersReal").
  6. [The number of trades in the platform](imtconcommon_totaldeals.md "TotalDeals").
  7. [Platform components update mode](imtconcommon_liveupdatemode.md "LiveUpdateMode").
