# IMTConAccountAllocation (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common")/ IMTConAccountAllocation | [](imtconcommon_accountallocationnext.md "AccountAllocationNext") [](imtconaccountallocation_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation
The IMTConAccountAllocation class contains methods for working with [account allocation settings](https://support.metaquotes.net/ru/docs/mt5/platform/administration/admin_accounts/account_allocation_groups). Each IMTConAccountAllocation object describes settings for a particular account group.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconaccountallocation_release.md "Release") | Delete the current object. |
| [Assign](imtconaccountallocation_assign.md "Assign") | Assign the passed object to the current one. |
| [Clear](imtconaccountallocation_clear.md "Clear") | Clear an object. |
| [Group](imtconaccountallocation_group.md "Group") | Get and set the group in which the accounts requested through terminals will be opened. |
| [Description](imtconaccountallocation_description.md "Description") | Get and set the group description displayed in the "Account type" field in client terminals. |
| [Flags](imtconaccountallocation_flags.md "Flags") | Get and set additional account allocation settings for the group. |
| [Leverages](imtconaccountallocation_leverages.md "Leverages") | Get and set the list of available leverage options which can be selected when opening an account in this group. |
| [Countries](imtconaccountallocation_countries.md "Countries") | Get and set the list of countries in which it will be possible to open an account in this group. |
| [ConfirmationEmail](imtconaccountallocation_confirmationemail.md "ConfirmationEmail") | Get and set the mail server which will be used for email confirmations when opening accounts in this group. |
| [AccountAgreementAdd](imtconaccountallocation_accountagreementadd.md "AccountAgreementAdd") | Add an agreement to the account allocation configuration. |
| [AccountAgreementUpdate](imtconaccountallocation_accountagreementupdate.md "AccountAgreementUpdate") | Edit an agreement in the account allocation configuration. |
| [AccountAgreementDelete](imtconaccountallocation_accountagreementdelete.md "AccountAgreementDelete") | Remove an agreement from the account allocation configuration. |
| [AccountAgreementClear](imtconaccountallocation_accountagreementclear.md "AccountAgreementClear") | Clear the list of agreements in the account allocation configuration. |
| [AccountAgreementShift](imtconaccountallocation_accountagreementshift.md "AccountAgreementShift") | Move an agreement in the account allocation configuration. |
| [AccountAgreementTotal](imtconaccountallocation_accountagreementtotal.md "AccountAgreementTotal") | Get the number of agreements in the account allocation configuration. |
| [AccountAgreementNext](imtconaccountallocation_accountagreementnext.md "AccountAgreementNext") | Get agreement by index. |

The IMTConAccountAgreement class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnFlags](imtconaccountallocation_enum.htm#enflags) | Additional agreement settings. |