---
id: bridge-front
title: Bridge - Application Front End
sidebar_label: Bridge Front End
sidebar_position: 4
---


# Bridge Front end - Tutorial

:::info
Currently, the two-way bridge is available exclusively on the testnet.
:::

:::info
The Archethic Bridge application is exclusively available as a web application accessible through internet browsers.
:::

:::caution
The application is compatible only with the desktop versions of the Archethic wallet, which include macOS, Linux, and Windows platforms.
:::

Ensure that you have the appropriate desktop version of the Archethic wallet installed on your system to interact with the application effectively. The Archethic wallet can be downloaded from [here](https://www.archethic.net/wallet/).

:::tip
For optimal performance, it is recommended to use the latest version of your internet browser and keep your desktop wallet updated.
:::


Access: https://bridge.testnet.archethic.net<br/>
Source code: https://github.com/archethic-foundation/bridge

This Flutter-built web application enables seamless asset deposits and withdrawals.

:::success
Before proceeding, familiarize yourself with [Archethic's Bridge Key Concepts](/participate/bridge/).
:::


## Prerequisites

To bridge, you must first configure your EVM wallet for the testnet networks with which you wish to interact, as well as obtain funds. 
We recommend consulting the testnet-related information in the [dedicated FAQ section](/FAQ/bridge-2-ways#testnet).


## Welcome Screen

Upon accessing the Archethic Bridge application, you are greeted with a welcome screen. To begin, click on the 'Bridge' button.

![Welcome Screen](/img/tutorial/Bridge-2-Welcome.png)  
![Bridge Button](/img/tutorial/Bridge-2-Bridge.png)

### Application Menu

A right-hand header menu provides links to essential information and application documentation. It includes an option to send logs to Archethic for troubleshooting purposes.

![Menu](/img/tutorial/Bridge-2-Menu.png)

### Feature Access

The left-side menu grants access to various bridge functionalities:

- Bridging between Archethic and EVM blockchains
- Viewing local history, resume or refund options, and transaction logs
- Refunding

![Menu Features](/img/tutorial/Bridge-2-Menu-features.png)

## Bridging Your Assets

The bridge process involves multiple steps:

1. Inputting information to initiate the transfer
2. Confirming the entered details
3. Executing the transfer, with progress tracking and transaction signing in both EVM and Archethic wallets

### Step 1: Initiating Transfer

:::info
Transfer steps remain consistent across all blockchain types and directions.
:::

Firstly, select the originating and target blockchains.

![Blockchain Selection](/img/tutorial/Bridge-2-BC-Selection.png)

:::caution
Ensure both Archethic and your chosen EVM wallets are connected before blockchain selection. Refer to the [FAQ](/category/faq) for connectivity issues.
:::

:::tip
Choose a testnet blockchain for testing purposes.
:::

:::tip
Select an EVM blockchain as the source automatically sets Archethic as the target.
:::

Post-selection, a field appears for token selection from available options.

![Token Selection](/img/tutorial/Bridge-2-token-Selection.png)

### Step 2: Confirming Details

On the confirmation screen, review:

- Entered information summary
- Fee details
- Post-fee token quantity

![Confirmation Screen](/img/tutorial/Bridge-2-Confirmation.png)

### Step 3: Executing Transfer

A transfer tracking popup guides you through the process, prompting for transaction confirmations in your wallets.

![Transfer Tracking](/img/tutorial/Bridge-2-status-confirm-wallet.png)

:::note
Transaction signing methods vary per EVM wallet.
:::

In the Archethic wallet, confirmation prompts automatically appear when necessary.

![Archethic Wallet Confirmation](/img/tutorial/Bridge-2-AEWallet-confirm.png)

:::caution
The transfer process halts if a transaction is declined or due to insufficient funds. However, it can be resumed later.
:::

![Transfer Resumption](/img/tutorial/Bridge-2-Resume.png)

:::note
HTLC contract addresses are provided for ongoing process tracking.
:::

![HTLC Information](/img/tutorial/Bridge-2-HTLC-infos.png)

## Local History and Management

View transfer history, successful or otherwise, through the application's local history feature.

:::caution
This history is local to your device. Access is not available on other devices.
:::

![History List](/img/tutorial/Bridge-2-History-list.png)

### Options Include:

- Deleting local history
- Filtering history entries

![History Filters](/img/tutorial/Bridge-2-Filters.png)

### Transfer Status Actions:

- Remove transfers from local history
- Resume interrupted transfers
- Refund for interrupted transfers
- Access transfer technical details for Archethic team analysis

![History Options](/img/tutorial/Bridge-2-History-icons.png)

## Refund Process

Retrieve your funds through the refund feature.

:::note
Manual refunding is unavailable for Archethic-blocked funds, as it is automatic.
:::

![Refund Form](/img/tutorial/Bridge-2-Refund-Form.png)

Upon wallet connection and address confirmation, refund eligibility and amount are displayed. Validate the refund to receive your funds, minus transaction fees.

![Refund Process](/img/tutorial/Bridge-2-Refund-Wait.png)

---