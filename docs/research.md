# Customizing the Future: Building Enterprise Agents with D365 and Copilot Studio

Reviewed 22 October 2026 (Asia/Bangkok). Fujitsu Thailand executive discussion proposal. Exactly two workflows are in scope. No customer tenant or implementation has been accessed.

## Executive evidence boundary

The custom opportunity is conditional: benchmark standard and preview features in the target tenant, then build only the unresolved company workflow. Community cases illustrate reported investigation friction. They do not establish market prevalence, a 70% baseline, or absence of standard capability.

| Workflow | Existing foundation | Proposed customer-specific work |
|---|---|---|
| Vendor email and rescheduling | Procurement Agent supplier communications and PO-change impact analysis are documented in production-ready preview | Company SOPs, approval routing, escalation and production handoff after a tenant benchmark |
| Tax document review | Invoice capture, invoice matching and Thailand withholding localization already exist | Approved cross-document evidence checks, exception routing and tax-specialist review |

## Claims used in the deck

- **70%:** a proposed stretch target for reducing investigation time, measured against the same-case baseline. It is not an observed customer result or an industry statistic. Slide 2 no longer claims employees spend 70% of their time investigating.
- **Zero-error compliance:** retained as the requested slide title and immediately qualified as a quality ambition. It is not a guarantee of perfect OCR, legal compliance or zero penalties.
- **Your Data Stays Yours:** customer control and identity boundaries, not a claim that all processing physically runs inside one tenant. Review geography, client retention, connectors and Microsoft 365 service exceptions. Microsoft's Azure OpenAI model-training commitment has a defined product scope.
- **Autonomous rescheduling:** constrained preparation and execution. Pilot writes require an authorized approval. A transaction must still pass ERP permission and business validation.

## Tax workflow precision

For eligible PO-based invoices, use the standard three-way match. Non-PO invoices require separately approved controls. Withholding certificates, tax-invoice evidence and PND filing support are related but distinct document paths. Do not apply invoice three-way matching to a withholding certificate. Confirm payee type, income classification, payment timing, effective dates and PND 3 / PND 53 treatment with the tax owner. The model must not invent rates. Tax rules and filing outcomes have not been validated in a customer environment.

## Proposed 10-week pilot

| Weeks | Work | Exit evidence |
|---|---|---|
| 1–2 | Baseline and standard/preview benchmark | Verified cases, time measurements, documented capability gap |
| 3–4 | Policy, security, integration and approval design | Approved data-flow map, action limits and test answers |
| 5–7 | Build and evaluate both workflows | Evidence quality, authorization checks, duplicate protection, ambiguity escalation |
| 8–10 | Controlled user pilot and decision | Same-case comparison, review effort, total cost per case, proceed/change recommendation |

One legal entity, an approved mailbox and approved sample documents. The schedule depends on access, licensing, feature availability and team readiness. Customer measures include investigation time, review accuracy, missed exceptions, approval effort and cost per case. Fujitsu measures include delivery effort and reuse of verified integration and policy patterns. Calculate value using observed effort savings minus licenses, AI consumption, integration, support and human review. A short pilot cannot establish a zero-penalty tax outcome.

## Concept art and narration

All visuals illustrate proposals, not a running D365 agent or actual customer data. The site has no ERP connection and executes no business actions. Both language tracks have recorded neural narration with an eight-minute cue schedule. See narration.md and visual-assets-v3.md.

<!-- GENERATED SOURCE REGISTER -->

### procurement

[Microsoft Learn — Procurement Agent supplier communications](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-agent-supplier-com-setup)

Type: Microsoft documentation · preview

เอกสารระบุ production-ready preview, SCM 10.0.44+ และการตั้งค่า mail/identity/สิทธิ์ ไม่ใช่ความสามารถที่ทุก tenant เปิดใช้แล้ว

### apCommunity

[Community — Purchase order: Invoice variation approval](https://community.dynamics.com/forums/thread/details/?threadid=3eac7e99-b991-4615-b58e-9e807150277e)

Type: Community case · suggested answer

ผู้ใช้อนุมัติ discrepancy แล้วแต่ posting ยังติด receipt quantity; แสดงความสับสนระหว่างการอนุมัติ variance กับ validation ของ receipt ไม่ได้พิสูจน์ว่า standard matching ใช้ไม่ได้ ไม่ปรากฏวันโพสต์จากหน้าที่อ่าน

### apStandard

[Microsoft Learn — Accounts payable invoice matching](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/accounts-payable-invoice-matching)

Type: Microsoft documentation

standard มี two/three-way matching, tolerance และ charges matching อยู่แล้ว; ส่วนเพิ่มที่เสนอคือ evidence pack เฉพาะ SOP/เอกสาร/owner ของลูกค้า

### mcp

[Microsoft Learn — Use ERP MCP for finance and operations](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp)

Type: Microsoft documentation

มีเครื่องมือเข้าถึงข้อมูลและ business actions รวม custom API ที่กำหนดสิทธิ์แล้ว; ไม่ใช่ทุก table/action จะเหมาะกับทุก use case ต้องตรวจ tools และ entity ที่เปิดจริง

### security

[Microsoft Learn — Security for Dynamics 365 ERP MCP](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/mcp/mcp-security)

Type: Microsoft documentation

คำขอใช้ identity/สิทธิ์/validation ของ F&O; ต้องพิจารณา retention และการส่งต่อข้อมูลของ agent client เองด้วย ไม่ได้แปลว่าข้อมูลไม่ออกจาก tenant ทุกกรณี

### logo

[Fujitsu — Original symbol mark asset](https://www.fmworld.net/fmv/img2019/common/symbolmark.svg)

Type: Brand asset

ไฟล์โลโก้จากโดเมน Fujitsu; ใช้สัดส่วนเดิม ภาพ infinity ปิดท้ายเป็นภาพที่ผู้ใช้ให้มา ไม่ใช่โลโก้ Fujitsu ที่ดัดแปลง

### impact

[Procurement Agent · PO-change impact analysis](https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-agent-impact-analysis-review-changes)

Type: Microsoft documentation · production-ready preview

มีความสามารถวิเคราะห์ผลกระทบใน preview แล้ว ส่วนเพิ่มต้องเป็น SOP/สายอนุมัติเฉพาะลูกค้าที่ benchmark แล้วยังขาด

### capture

[Invoice capture solution](https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/invoice-capture-overview)

Type: Microsoft documentation

มี OCR สร้าง invoice อยู่แล้ว ต้องทดสอบภาษา รูปแบบเอกสาร และ licence ใน tenant

### thaiTax

[Withholding tax in Thailand](https://learn.microsoft.com/en-us/dynamics365/finance/localizations/thailand/apac-tha-withholding-tax)

Type: Microsoft documentation

มีการคำนวณภาษีหัก ณ ที่จ่ายและรายงานไทยอยู่แล้ว ให้ฝ่ายภาษีอนุมัติกฎตามวันที่มีผล

### rd

[Revenue Department · PND 3 obligations](https://www.rd.go.th/region/05/fileadmin/163/004_pdf/taxkm/pnd3.pdf)

Type: Thai Revenue Department · official guidance

ให้ฝ่ายภาษียืนยันประเภทผู้รับเงิน ประเภทเงินได้ แบบและอัตราตามกฎปัจจุบัน ไม่รับประกันไร้ค่าปรับ

### geo

[Generative AI · Geographic availability](https://learn.microsoft.com/en-us/power-platform/admin/geographical-availability-copilot)

Type: Microsoft documentation

ไม่ใช้ข้อมูลฝึก Azure OpenAI foundation models แต่ข้อมูลอาจข้ามภูมิภาคตามบริการและการตั้งค่า

### location

[Copilot Studio · Data locations](https://learn.microsoft.com/en-us/microsoft-copilot-studio/data-location)

Type: Microsoft documentation

ทบทวนภูมิภาค connector Microsoft 365 และ retention ไม่อ้างว่ารันใน tenant 100%

### governance

[Copilot Studio · Security and governance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance)

Type: Microsoft documentation

กำหนด authentication, data policies และ action สามระดับอำนาจและแผนสิบสัปดาห์เป็นข้อเสนอของโครงการ
