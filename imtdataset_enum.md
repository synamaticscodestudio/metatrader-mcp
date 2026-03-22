# Enumerations (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ Enumerations | [](imtdataset.md "IMTDataset") [](imtdataset_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTDataset](imtdataset.md "IMTDataset") interface contains the following enumerations:
  * [IMTDataset::EnDataSetFlags](imtdataset_enum.md "Enumerations")

IMTDataset::EnDataSetFlags
Flags of tabular data for a dashboard are enumerated in IMTDataset::EnDataSetFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| DATASET_FLAG_NONE | 0x00000000 | No flags. |
| DATASET_FLAG_COMPRESSED | 0x00000001 | An indication that data sets need to be compressed during transmission. Use this flag for large data sets that contain report results. A report can only write data to compressed data sets; reading data is not possible. Temporary data sets that are used to generate a report but are not displayed in the result do not need to be compressed. |

The enumeration is used in the [IMTDataset::Flags](imtdataset_flags.md "Flags") method.