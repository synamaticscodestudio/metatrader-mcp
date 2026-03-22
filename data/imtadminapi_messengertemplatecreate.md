# MessengerTemplateCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerTemplateCreate | [](imtadminapi_messengergroupcreate.md "MessengerGroupCreate") [](imtadminapi_messengersubscribe.md "MessengerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerTemplateCreate
Создание объекта шаблона сообщений, которой будет использоваться в мессенджере.
C++
IMTConMessengerTemplate* IMTAdminAPI::MessengerTemplateCreate()  
---  
.NET
CIMTConMessengerTemplate CIMTAdminAPI.MessengerTemplateCreate()  
---  
Возвращаемое значение
Возвращает указатель на созданный объект, реализующий интерфейс [IMTConMessengerTemplate](imtconmessengertemplate.md "IMTConMessengerTemplate"). В случае неудачи возвращается NULL.
Примечание
Созданный объект должен быть уничтожен вызовом метода [IMTConMessengerTemplate::Release](imtconmessengertemplate_release.md "Release") этого объекта.