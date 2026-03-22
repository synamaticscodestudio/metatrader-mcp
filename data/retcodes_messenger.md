# Messengers (MetaTrader5SDK)

|  | [ Return Codes ](reference_retcodes.md "Return Codes")/ Messengers | [](retcodes_api.md "API") [](retcodes_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

Instant messengers
The server returns codes from this group when sending messages via instant messengers.
| Constant | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| MT_RET_MESSENGER_INVALID_PHONE | 14000 | An invalid phone number is specified. The number must be specified in the format +[country code][number], for example: +74951113594. The should be specified without spaces. |
| MT_RET_MESSENGER_NOT_MOBILE | 14001 | A landline phone number is specified instead of a mobile one. Mobile phone numbers must be specified when sending messages. Messages cannot be delivered to other phone numbers. |

The codes are used for the following methods:
  * [IMTServerAPI::MessengerSend](imtserverapi_messengersend.md "MessengerSend")
  * [IMTAdminAPI::MessengerSend](imtadminapi_messengersend.md "MessengerSend")
  * [IMTManagerAPI::MessengerSend](imtmanagerapi_messengersend.md "MessengerSend")
  * [/messenger_send](webapi_messenger_send.md "Send Message")
