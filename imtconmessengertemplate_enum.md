# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerTemplate ](imtconmessengertemplate.md "IMTConMessengerTemplate")/ Перечисления | [](imtconmessengertemplate.md "IMTConMessengerTemplate") [](imtconmessengertemplate_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConMessengerTemplate](imtconmessengertemplate.md "IMTConMessengerTemplate") class contains the following enumerations:
  * [IMTConMessengerTemplate::EnFlags](imtconmessengertemplate_enum.htm#enmessengertemplatetypes)

IMTConMessengerTemplate::EnMessengerTemplateTypes
IMTConMessengerTemplate::EnFlags lists the messenger settings flags.
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TEMPLATE_TYPE_PHONE_CONFIRMATION | 0 | Phone verification. |
| TEMPLATE_TYPE_DEPOSIT_COMPLETED | 1 | Successful deposit. |
| TEMPLATE_TYPE_DEPOSIT_FAILED | 2 | Deposit error. |
| TEMPLATE_TYPE_DEPOSIT_PROCESSEED | 3 | Deposit processing. |
| TEMPLATE_TYPE_WITHDRAWAL_COMPLETED | 4 | Successful withdrawal. |
| TEMPLATE_TYPE_WITHDRAWAL_CONFIRMED | 5 | Withdrawal confirmation. Sent when a withdrawal request is submitted for processing by the payment system. |
| TEMPLATE_TYPE_WITHDRAWAL_FAILED | 6 | Withdrawal error. |
| TEMPLATE_TYPE_WITHDRAWAL_VERIFIED | 7 | Withdrawal verification. Sent upon manager approval, allowing the user to proceed with the payment. Used for providers where all payment details are entered on the payment system's page (e.g., [AstroPay](https://support.metaquotes.net/ru/docs/mt5/platform/administration/payments/payments_wallets/payments_astropay)). In such cases, during manual processing, the manager only approves the transaction itself. |
| FLAG_FIRST |  | Enumeration beginning. Corresponds to TEMPLATE_TYPE_PHONE_CONFIRMATION. |
| FLAG_ALL |  | Enumeration end. TEMPLATE_TYPE_WITHDRAWAL_VERIFIED. |

The enumeration is used in the [IMTConMessengerTemplate::Type](imtconmessengertemplate_type.md "Type") method.