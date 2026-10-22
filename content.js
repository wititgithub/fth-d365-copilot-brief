export const checked = '2026-10-22';
export const sources = {
  "procurement": {
    "title": "Microsoft Learn — Procurement Agent supplier communications",
    "url": "https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-agent-supplier-com-setup",
    "kind": "Microsoft documentation · preview",
    "note": "เอกสารระบุ production-ready preview, SCM 10.0.44+ และการตั้งค่า mail/identity/สิทธิ์ ไม่ใช่ความสามารถที่ทุก tenant เปิดใช้แล้ว",
    "noteEn": "Supplier-email extraction and PO/date suggestions already exist in production-ready preview. Benchmark the target tenant before extending company SOPs and approvals."
  },
  "apCommunity": {
    "title": "Community — Purchase order: Invoice variation approval",
    "url": "https://community.dynamics.com/forums/thread/details/?threadid=3eac7e99-b991-4615-b58e-9e807150277e",
    "kind": "Community case · suggested answer",
    "note": "ผู้ใช้อนุมัติ discrepancy แล้วแต่ posting ยังติด receipt quantity; แสดงความสับสนระหว่างการอนุมัติ variance กับ validation ของ receipt ไม่ได้พิสูจน์ว่า standard matching ใช้ไม่ได้ ไม่ปรากฏวันโพสต์จากหน้าที่อ่าน",
    "noteEn": "One receipt-quantity validation case illustrates investigation effort. It is not prevalence evidence, a 70% baseline, or proof of missing standard functionality."
  },
  "apStandard": {
    "title": "Microsoft Learn — Accounts payable invoice matching",
    "url": "https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/accounts-payable-invoice-matching",
    "kind": "Microsoft documentation",
    "note": "standard มี two/three-way matching, tolerance และ charges matching อยู่แล้ว; ส่วนเพิ่มที่เสนอคือ evidence pack เฉพาะ SOP/เอกสาร/owner ของลูกค้า",
    "noteEn": "Standard two/three-way matching and tolerances remain authoritative. Three-way matching applies to eligible PO-based invoices. Non-PO invoices need separate approved checks."
  },
  "mcp": {
    "title": "Microsoft Learn — Use ERP MCP for finance and operations",
    "url": "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp",
    "kind": "Microsoft documentation",
    "note": "มีเครื่องมือเข้าถึงข้อมูลและ business actions รวม custom API ที่กำหนดสิทธิ์แล้ว; ไม่ใช่ทุก table/action จะเหมาะกับทุก use case ต้องตรวจ tools และ entity ที่เปิดจริง",
    "noteEn": "Verify available ERP MCP tools and secured APIs in the target environment. Existing business logic and permissions remain authoritative."
  },
  "security": {
    "title": "Microsoft Learn — Security for Dynamics 365 ERP MCP",
    "url": "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/mcp/mcp-security",
    "kind": "Microsoft documentation",
    "note": "คำขอใช้ identity/สิทธิ์/validation ของ F&O; ต้องพิจารณา retention และการส่งต่อข้อมูลของ agent client เองด้วย ไม่ได้แปลว่าข้อมูลไม่ออกจาก tenant ทุกกรณี",
    "noteEn": "MCP uses authenticated identities and ERP controls. Client retention and onward transfers require review. Tenant isolation does not guarantee all processing stays inside one tenant."
  },
  "logo": {
    "title": "Fujitsu — Original symbol mark asset",
    "url": "https://www.fmworld.net/fmv/img2019/common/symbolmark.svg",
    "kind": "Brand asset",
    "note": "ไฟล์โลโก้จากโดเมน Fujitsu; ใช้สัดส่วนเดิม ภาพ infinity ปิดท้ายเป็นภาพที่ผู้ใช้ให้มา ไม่ใช่โลโก้ Fujitsu ที่ดัดแปลง",
    "noteEn": "Brand proportions and the original supplied artwork are preserved. Code-rendered infinity motion is conceptual art, not an official partnership announcement."
  },
  "impact": {
    "title": "Procurement Agent · PO-change impact analysis",
    "url": "https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/procurement-agent-impact-analysis-review-changes",
    "kind": "Microsoft documentation · production-ready preview",
    "note": "มีความสามารถวิเคราะห์ผลกระทบใน preview แล้ว ส่วนเพิ่มต้องเป็น SOP/สายอนุมัติเฉพาะลูกค้าที่ benchmark แล้วยังขาด",
    "noteEn": "PO-change impact analysis is already documented in preview. Extend company-specific approval and handoff only where a tenant benchmark confirms a gap."
  },
  "capture": {
    "title": "Invoice capture solution",
    "url": "https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/invoice-capture-overview",
    "kind": "Microsoft documentation",
    "note": "มี OCR สร้าง invoice อยู่แล้ว ต้องทดสอบภาษา รูปแบบเอกสาร และ licence ใน tenant",
    "noteEn": "Invoice capture already creates vendor invoices from images. Reuse capture and standard validations; verify language, document layouts and licensing."
  },
  "thaiTax": {
    "title": "Withholding tax in Thailand",
    "url": "https://learn.microsoft.com/en-us/dynamics365/finance/localizations/thailand/apac-tha-withholding-tax",
    "kind": "Microsoft documentation",
    "note": "มีการคำนวณภาษีหัก ณ ที่จ่ายและรายงานไทยอยู่แล้ว ให้ฝ่ายภาษีอนุมัติกฎตามวันที่มีผล",
    "noteEn": "Thailand localization already supports withholding calculations and reports. Tax owners approve payee, income, effective-date and reporting rules."
  },
  "rd": {
    "title": "Revenue Department · PND 3 obligations",
    "url": "https://www.rd.go.th/region/05/fileadmin/163/004_pdf/taxkm/pnd3.pdf",
    "kind": "Thai Revenue Department · official guidance",
    "note": "ให้ฝ่ายภาษียืนยันประเภทผู้รับเงิน ประเภทเงินได้ แบบและอัตราตามกฎปัจจุบัน ไม่รับประกันไร้ค่าปรับ",
    "noteEn": "Confirm current payee and income treatment with the tax owner. No universal rate or zero-penalty guarantee is asserted."
  },
  "geo": {
    "title": "Generative AI · Geographic availability",
    "url": "https://learn.microsoft.com/en-us/power-platform/admin/geographical-availability-copilot",
    "kind": "Microsoft documentation",
    "note": "ไม่ใช้ข้อมูลฝึก Azure OpenAI foundation models แต่ข้อมูลอาจข้ามภูมิภาคตามบริการและการตั้งค่า",
    "noteEn": "Microsoft states customer data is not used to train, retrain or improve Azure OpenAI foundation models. Processing can cross regions depending on services and environment settings."
  },
  "location": {
    "title": "Copilot Studio · Data locations",
    "url": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/data-location",
    "kind": "Microsoft documentation",
    "note": "ทบทวนภูมิภาค connector Microsoft 365 และ retention ไม่อ้างว่ารันใน tenant 100%",
    "noteEn": "Review geography, connector destinations, Microsoft 365 dependencies and retention exceptions. Approve an explicit data-flow map before launch."
  },
  "governance": {
    "title": "Copilot Studio · Security and governance",
    "url": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance",
    "kind": "Microsoft documentation",
    "note": "กำหนด authentication, data policies และ action สามระดับอำนาจและแผนสิบสัปดาห์เป็นข้อเสนอของโครงการ",
    "noteEn": "Configure authentication, data policies and action boundaries. The three autonomy tiers and ten-week schedule are proposed project controls, not product guarantees."
  }
};
export const slides = [
  {
    "id": "opportunity",
    "visual": "hero",
    "theme": "light",
    "duration": 40,
    "title": {
      "th": "ออกแบบอนาคต\nด้วย Enterprise Agents",
      "en": "Customizing the Future:\nBuilding Enterprise Agents"
    },
    "subtitle": {
      "th": "Dynamics 365 × Copilot Studio",
      "en": "with D365 and Copilot Studio"
    },
    "takeaway": {
      "th": "จากระบบบันทึกข้อมูล สู่ผู้ช่วยขับเคลื่อนงาน",
      "en": "From System of Record to System of Agency"
    },
    "labels": {
      "th": [
        "รับรู้เหตุการณ์",
        "เตรียมการตัดสินใจ",
        "ลงมืออย่างมีขอบเขต"
      ],
      "en": [
        "Perceive events",
        "Prepare decisions",
        "Act within policy"
      ]
    },
    "sources": [
      "mcp",
      "governance"
    ],
    "notes": {
      "th": "สวัสดีครับ วันนี้เราจะมองก้าวต่อไปของไดนามิกส์ ทรีซิกซ์ตี้ไฟฟ์ ร่วมกับโคไพลอต สตูดิโอ จากระบบที่บันทึกธุรกรรม สู่ผู้ช่วยที่รับรู้เหตุการณ์ เตรียมทางเลือก และขับเคลื่อนงานภายใต้กติกาขององค์กร\n\nหัวใจคือทำให้ข้อมูลที่เรามี นำไปสู่การตัดสินใจที่เร็วขึ้น โดยยังคงสิทธิ์และความรับผิดชอบไว้อย่างชัดเจน วันนี้ผมจะพาไปดูสองเรื่อง ได้แก่ อีเมลคู่ค้าที่ขอเลื่อนส่งสินค้า และการตรวจเอกสารภาษี พร้อมแนวทางนำร่องที่ฟูจิตสึ ประเทศไทย สามารถพัฒนาร่วมกับลูกค้าได้ครับ",
      "en": "Good morning, everyone. Today we will explore how Dynamics 365 and Copilot Studio can support the next step in enterprise operations. Our theme is Customizing the Future: Building Enterprise Agents. We describe this shift as moving from a System of Record toward a System of Agency, where an agent recognizes an event, prepares a decision and takes an authorized action. We will focus on two workflows: vendor delivery changes and tax-document review. The opportunity for Fujitsu Thailand is to connect Microsoft capabilities with each customer’s procedures, while keeping responsibility and control clear."
    },
    "chapter": "01 / CUSTOMIZING THE FUTURE",
    "audio": {
      "th": "assets/audio/v3/th-01.mp3",
      "en": "assets/audio/v3/en-01.mp3"
    },
    "speechSegments": {
      "th": [
        "สวัสดีครับ วันนี้เราจะมองก้าวต่อไปของไดนามิกส์ ทรีซิกซ์ตี้ไฟฟ์ ร่วมกับโคไพลอต สตูดิโอ จากระบบที่บันทึกธุรกรรม สู่ผู้ช่วยที่รับรู้เหตุการณ์ เตรียมทางเลือก และขับเคลื่อนงานภายใต้กติกาขององค์กร",
        "หัวใจคือทำให้ข้อมูลที่เรามี นำไปสู่การตัดสินใจที่เร็วขึ้น โดยยังคงสิทธิ์และความรับผิดชอบไว้อย่างชัดเจน วันนี้ผมจะพาไปดูสองเรื่อง ได้แก่ อีเมลคู่ค้าที่ขอเลื่อนส่งสินค้า และการตรวจเอกสารภาษี พร้อมแนวทางนำร่องที่ฟูจิตสึ ประเทศไทย สามารถพัฒนาร่วมกับลูกค้าได้ครับ"
      ]
    },
    "useCase": false
  },
  {
    "id": "standard",
    "visual": "boundary",
    "theme": "dark",
    "duration": 45,
    "title": {
      "th": "ภาระการสืบค้น\nเมื่อธุรกรรมมีข้อยกเว้น",
      "en": "The Investigation Burden:\nBeyond the Happy Path"
    },
    "subtitle": {
      "th": "ข้อมูลมีครบ แต่คำตอบอยู่คนละจุด",
      "en": "The evidence exists. The answer is scattered."
    },
    "takeaway": {
      "th": "วัดเวลาจริง ก่อนตั้งเป้าลดเวลาสืบค้น 70%",
      "en": "Measure the baseline. Test a 70% reduction target."
    },
    "labels": {
      "th": [
        "อีเมล",
        "รายการในระบบ",
        "ขั้นตอนปฏิบัติ",
        "คนรวบรวมหลักฐาน",
        "ข้อยกเว้น"
      ],
      "en": [
        "Email",
        "ERP records",
        "Company SOPs",
        "Manual investigation",
        "Exception"
      ]
    },
    "sources": [
      "apCommunity",
      "procurement",
      "impact",
      "capture"
    ],
    "notes": {
      "th": "เมื่อธุรกรรมเป็นไปตามแผน ระบบช่วยเราได้มากอยู่แล้วครับ แต่เมื่อคู่ค้าขอเลื่อนส่งของ หรือข้อมูลในใบกำกับภาษีไม่ตรงกัน ทีมงานต้องเปิดอีเมล ตรวจรายการในระบบ และค้นขั้นตอนปฏิบัติ เพื่อหาว่าใครควรทำอะไรต่อ\n\nตัวอย่างจากชุมชนผู้ใช้สะท้อนภาระนี้ แต่ยังไม่มีหลักฐานว่าทุกองค์กรเสียเวลาเท่ากัน เราจึงเริ่มจากจับเวลางานจริง ส่วนการลดเวลาร้อยละเจ็ดสิบ จะเป็นเป้าหมายท้าทายในโครงการนำร่อง\n\nก่อนสร้างส่วนเพิ่ม เราจะทดสอบความสามารถมาตรฐานกับงานเดียวกัน เพราะไมโครซอฟท์มีทั้งเอเจนต์จัดซื้อ และระบบรับเอกสารใบแจ้งหนี้อยู่แล้วครับ",
      "en": "The investigation burden appears when a transaction leaves the happy path. A supplier changes a date, or an invoice disagrees with a receipt. People collect email, transaction records and procedures before deciding what to do. Community discussions show this friction, but they do not establish a universal percentage of employee time. We will measure the customer’s baseline. A seventy percent reduction is a stretch target to test, rather than a promised result. Microsoft already provides procurement-agent and invoice-capture capabilities, so our first decision is whether a company-specific gap remains after using those tools."
    },
    "chapter": "02 / THE INVESTIGATION BURDEN",
    "audio": {
      "th": "assets/audio/v3/th-02.mp3",
      "en": "assets/audio/v3/en-02.mp3"
    },
    "speechSegments": {
      "th": [
        "เมื่อธุรกรรมเป็นไปตามแผน ระบบช่วยเราได้มากอยู่แล้วครับ แต่เมื่อคู่ค้าขอเลื่อนส่งของ หรือข้อมูลในใบกำกับภาษีไม่ตรงกัน ทีมงานต้องเปิดอีเมล ตรวจรายการในระบบ และค้นขั้นตอนปฏิบัติ เพื่อหาว่าใครควรทำอะไรต่อ",
        "ตัวอย่างจากชุมชนผู้ใช้สะท้อนภาระนี้ แต่ยังไม่มีหลักฐานว่าทุกองค์กรเสียเวลาเท่ากัน เราจึงเริ่มจากจับเวลางานจริง ส่วนการลดเวลาร้อยละเจ็ดสิบ จะเป็นเป้าหมายท้าทายในโครงการนำร่อง",
        "ก่อนสร้างส่วนเพิ่ม เราจะทดสอบความสามารถมาตรฐานกับงานเดียวกัน เพราะไมโครซอฟท์มีทั้งเอเจนต์จัดซื้อ และระบบรับเอกสารใบแจ้งหนี้อยู่แล้วครับ"
      ]
    },
    "useCase": false
  },
  {
    "id": "architecture",
    "visual": "anatomy",
    "theme": "light",
    "duration": 45,
    "title": {
      "th": "องค์ประกอบของ Agent\nรับรู้ วิเคราะห์ ลงมือ กำกับ",
      "en": "Anatomy of an Agent:\nPerceive, Reason, Act, Govern"
    },
    "subtitle": {
      "th": "หนึ่งวงจร จากเหตุการณ์ถึงหลักฐานตรวจสอบ",
      "en": "One controlled loop, from event to audit trail"
    },
    "takeaway": {
      "th": "Copilot Studio + ERP MCP + สิทธิ์เดิมของ D365",
      "en": "Copilot Studio + ERP MCP + existing D365 controls"
    },
    "labels": {
      "th": [
        "รับรู้",
        "วิเคราะห์",
        "ลงมือ",
        "กำกับ",
        "อีเมล / เอกสาร",
        "SOP ที่อนุมัติ",
        "ERP MCP / API",
        "สิทธิ์ / ประวัติ"
      ],
      "en": [
        "Perceive",
        "Reason",
        "Act",
        "Govern",
        "Email / documents",
        "Approved SOPs",
        "ERP MCP / APIs",
        "Identity / audit"
      ]
    },
    "sources": [
      "mcp",
      "security",
      "governance"
    ],
    "notes": {
      "th": "เอเจนต์สำหรับองค์กรมีสี่ส่วนที่ต้องทำงานร่วมกันครับ ส่วนแรก รับรู้เหตุการณ์ เช่น อีเมลใหม่หรือเอกสารที่ส่งเข้ามา ส่วนที่สอง วิเคราะห์โดยอ้างอิงข้อมูลในระบบ และขั้นตอนปฏิบัติที่องค์กรอนุมัติ\n\nส่วนที่สาม ลงมือผ่านเครื่องมือที่เปิดให้ใช้ เช่น อีอาร์พี เอ็มซีพี หรือเอพีไอที่กำหนดสิทธิ์แล้ว และส่วนสุดท้าย กำกับด้วยการยืนยันตัวตน ขอบเขตอำนาจ และประวัติการทำงานที่ตรวจย้อนหลังได้\n\nโคไพลอต สตูดิโอช่วยประสานวงจรนี้ ส่วนการตรวจสิทธิ์และกฎธุรกิจยังอยู่ในระบบเดิม เราต้องตรวจด้วยว่าเครื่องมือใดพร้อมใช้จริงในสภาพแวดล้อมของลูกค้าครับ",
      "en": "An enterprise agent needs four connected capabilities. Perceive means recognizing an email, document or business event. Reason means relating that event to ERP facts and approved procedures. Act means using an available ERP MCP tool or secured API, with the same business validations the application normally applies. Govern means authenticating the identity, limiting authority and recording what happened. Copilot Studio coordinates the workflow. Dynamics remains responsible for transaction controls. Before implementation, we must verify the actual tools and permissions available in the customer environment, including how a failed or repeated request will be handled."
    },
    "chapter": "03 / ANATOMY OF AN AGENT",
    "audio": {
      "th": "assets/audio/v3/th-03.mp3",
      "en": "assets/audio/v3/en-03.mp3"
    },
    "speechSegments": {
      "th": [
        "เอเจนต์สำหรับองค์กรมีสี่ส่วนที่ต้องทำงานร่วมกันครับ ส่วนแรก รับรู้เหตุการณ์ เช่น อีเมลใหม่หรือเอกสารที่ส่งเข้ามา ส่วนที่สอง วิเคราะห์โดยอ้างอิงข้อมูลในระบบ และขั้นตอนปฏิบัติที่องค์กรอนุมัติ",
        "ส่วนที่สาม ลงมือผ่านเครื่องมือที่เปิดให้ใช้ เช่น อีอาร์พี เอ็มซีพี หรือเอพีไอที่กำหนดสิทธิ์แล้ว และส่วนสุดท้าย กำกับด้วยการยืนยันตัวตน ขอบเขตอำนาจ และประวัติการทำงานที่ตรวจย้อนหลังได้",
        "โคไพลอต สตูดิโอช่วยประสานวงจรนี้ ส่วนการตรวจสิทธิ์และกฎธุรกิจยังอยู่ในระบบเดิม เราต้องตรวจด้วยว่าเครื่องมือใดพร้อมใช้จริงในสภาพแวดล้อมของลูกค้าครับ"
      ]
    },
    "useCase": false
  },
  {
    "id": "vendor-email",
    "visual": "vendor-email",
    "theme": "dark",
    "duration": 60,
    "title": {
      "th": "กรณีที่ 1: อีเมลคู่ค้า\nสู่แผนส่งมอบที่ผ่านอนุมัติ",
      "en": "Use Case 1: Vendor Email Ingestion\n& Autonomous Rescheduling"
    },
    "subtitle": {
      "th": "ตรวจผลกระทบ เตรียมแผน ส่งขออนุมัติ",
      "en": "Assess impact. Prepare changes. Route for approval."
    },
    "takeaway": {
      "th": "ส่วนเพิ่ม: SOP ลูกค้า + อนุมัติ + ประสานแผนผลิต",
      "en": "Custom layer: company SOPs + approvals + production handoff"
    },
    "labels": {
      "th": [
        "อีเมลคู่ค้า",
        "ผลกระทบแผนผลิต",
        "ร่างวันส่งมอบ",
        "คนอนุมัติ"
      ],
      "en": [
        "Vendor email",
        "Production impact",
        "Proposed date",
        "Human approval"
      ]
    },
    "sources": [
      "procurement",
      "impact",
      "mcp",
      "security"
    ],
    "notes": {
      "th": "กรณีแรกเริ่มจากอีเมลคู่ค้า แจ้งว่าต้องเลื่อนส่งวัตถุดิบครับ เอเจนต์ระบุเลขใบสั่งซื้อ รายการสินค้า และวันที่เสนอใหม่ แล้วตรวจเทียบข้อมูลล่าสุดในระบบ เพื่อให้แน่ใจว่าอีเมลตรงกับรายการที่ต้องแก้\n\nจากนั้นนำผลกระทบต่อความต้องการวัตถุดิบและแผนผลิตมารวมไว้ในเรื่องเดียว พร้อมร่างการเปลี่ยนวันส่งมอบ และส่งให้ผู้มีอำนาจพิจารณา เมื่ออนุมัติแล้วจึงเรียกขั้นตอนบันทึกผ่านเครื่องมือที่ได้รับสิทธิ์ พร้อมเก็บเหตุผลและเอกสารอ้างอิง\n\nไมโครซอฟท์มีความสามารถอ่านอีเมลและวิเคราะห์ผลกระทบในรุ่นพรีวิวแล้ว คุณค่าที่เราจะเพิ่มอยู่ที่ขั้นตอนเฉพาะลูกค้า การส่งอนุมัติ และการประสานทีมผลิต หากข้อมูลกำกวมหรือมีการเปลี่ยนซ้ำ ระบบต้องหยุดส่งให้คนตรวจครับ",
      "en": "Our first workflow begins when a vendor emails a delivery delay. The agent identifies the purchase order, affected lines and proposed date, then verifies them against the latest ERP record. It brings the production impact and the suggested delivery change into one approval package. After the authorized buyer approves, a secured action applies the change and records the evidence. Microsoft already documents supplier-email changes and procurement impact analysis in preview. Our proposed extension is the customer’s specific approval policy, escalation rules and production handoff, where the standard benchmark shows a gap. We also need duplicate detection, a fresh-data check before writing, and a safe stop when the email is ambiguous. Autonomous rescheduling means controlled preparation and execution within explicit authority. The pilot starts with human approval for every write."
    },
    "chapter": "04 / USE CASE 01 · PROCUREMENT",
    "audio": {
      "th": "assets/audio/v3/th-04.mp3",
      "en": "assets/audio/v3/en-04.mp3"
    },
    "speechSegments": {
      "th": [
        "กรณีแรกเริ่มจากอีเมลคู่ค้า แจ้งว่าต้องเลื่อนส่งวัตถุดิบครับ เอเจนต์ระบุเลขใบสั่งซื้อ รายการสินค้า และวันที่เสนอใหม่ แล้วตรวจเทียบข้อมูลล่าสุดในระบบ เพื่อให้แน่ใจว่าอีเมลตรงกับรายการที่ต้องแก้",
        "จากนั้นนำผลกระทบต่อความต้องการวัตถุดิบและแผนผลิตมารวมไว้ในเรื่องเดียว พร้อมร่างการเปลี่ยนวันส่งมอบ และส่งให้ผู้มีอำนาจพิจารณา เมื่ออนุมัติแล้วจึงเรียกขั้นตอนบันทึกผ่านเครื่องมือที่ได้รับสิทธิ์ พร้อมเก็บเหตุผลและเอกสารอ้างอิง",
        "ไมโครซอฟท์มีความสามารถอ่านอีเมลและวิเคราะห์ผลกระทบในรุ่นพรีวิวแล้ว คุณค่าที่เราจะเพิ่มอยู่ที่ขั้นตอนเฉพาะลูกค้า การส่งอนุมัติ และการประสานทีมผลิต หากข้อมูลกำกวมหรือมีการเปลี่ยนซ้ำ ระบบต้องหยุดส่งให้คนตรวจครับ"
      ]
    },
    "useCase": true
  },
  {
    "id": "tax-compliance",
    "visual": "invoice",
    "theme": "light",
    "duration": 60,
    "title": {
      "th": "กรณีที่ 2: สแกนเอกสารภาษี\nตรวจข้อผิดพลาดก่อนลงบัญชี",
      "en": "Use Case 2: Tax Invoice Scanning\n& Zero-Error Compliance"
    },
    "subtitle": {
      "th": "เอกสารภาษี + Matching + ผู้เชี่ยวชาญยืนยัน",
      "en": "Tax evidence + matching + accountable review"
    },
    "takeaway": {
      "th": "Zero-error เป็นเป้าหมายคุณภาพ ต้องพิสูจน์ด้วยข้อมูลจริง",
      "en": "Zero-error is a quality ambition, subject to validation."
    },
    "labels": {
      "th": [
        "ใบกำกับภาษี",
        "PO / ใบรับสินค้า",
        "หัก ณ ที่จ่าย",
        "ข้อยกเว้นส่งตรวจ"
      ],
      "en": [
        "Tax invoice",
        "PO / receipt",
        "Withholding",
        "Review exceptions"
      ]
    },
    "sources": [
      "capture",
      "apStandard",
      "thaiTax",
      "rd",
      "apCommunity"
    ],
    "notes": {
      "th": "กรณีที่สองคือการตรวจเอกสารภาษีครับ เริ่มจากอ่านใบกำกับภาษีด้วยระบบรู้จำตัวอักษร แล้วตรวจข้อมูลสำคัญ เช่น เลขประจำตัวผู้เสียภาษี เลขที่เอกสาร และยอดเงิน พร้อมเทียบใบสั่งซื้อกับใบรับสินค้า สำหรับรายการที่ใช้การจับคู่สามทางได้\n\nฝั่งภาษีหัก ณ ที่จ่าย ต้องแยกตามประเภทผู้รับเงิน ประเภทเงินได้ และเวลาที่เกิดหน้าที่ภาษี ไม่ใช่นำเอกสารทุกชนิดไปจับคู่ด้วยกติกาเดียวกัน เอเจนต์ช่วยเตรียมหลักฐานและชี้รายการผิดปกติ ส่วนแบบ ภอ งอ ดอ สาม หรือ ภอ งอ ดอ ห้าสิบสาม และอัตราที่ใช้ ต้องอ้างอิงกฎที่ฝ่ายภาษีอนุมัติ\n\nระบบมาตรฐานมีการอ่านใบแจ้งหนี้ การจับคู่ และภาษีไทยอยู่แล้ว เราเสริมการตรวจข้ามเอกสารและขั้นตอนส่งให้ผู้เชี่ยวชาญยืนยัน เป้าหมายคือป้องกันข้อผิดพลาดและลดความเสี่ยง ไม่ใช่รับประกันว่าจะไม่มีความผิดพลาดหรือค่าปรับครับ",
      "en": "The second workflow reviews tax documents before posting or reporting. Optical character recognition extracts key fields from the tax invoice. For applicable purchase-order invoices, Dynamics performs its existing three-way match against the order and receipt. Non-PO invoices need a separate approved control. Withholding evidence also needs its own checks, because the payee, income type and payment event determine the tax treatment. The agent can collect evidence, flag inconsistent details and prepare a review queue. Tax owners approve the rules and confirm PND 3 or PND 53 treatment. Standard invoice capture, matching and Thailand localization remain the foundation. The custom layer connects customer-specific document checks and review procedures. Zero-error describes the quality ambition. We will measure extraction accuracy, missed exceptions and review effort, without a zero-penalty promise."
    },
    "chapter": "05 / USE CASE 02 · FINANCE & TAX",
    "audio": {
      "th": "assets/audio/v3/th-05.mp3",
      "en": "assets/audio/v3/en-05.mp3"
    },
    "speechSegments": {
      "th": [
        "กรณีที่สองคือการตรวจเอกสารภาษีครับ เริ่มจากอ่านใบกำกับภาษีด้วยระบบรู้จำตัวอักษร แล้วตรวจข้อมูลสำคัญ เช่น เลขประจำตัวผู้เสียภาษี เลขที่เอกสาร และยอดเงิน พร้อมเทียบใบสั่งซื้อกับใบรับสินค้า สำหรับรายการที่ใช้การจับคู่สามทางได้",
        "ฝั่งภาษีหัก ณ ที่จ่าย ต้องแยกตามประเภทผู้รับเงิน ประเภทเงินได้ และเวลาที่เกิดหน้าที่ภาษี ไม่ใช่นำเอกสารทุกชนิดไปจับคู่ด้วยกติกาเดียวกัน เอเจนต์ช่วยเตรียมหลักฐานและชี้รายการผิดปกติ ส่วนแบบ ภอ งอ ดอ สาม หรือ ภอ งอ ดอ ห้าสิบสาม และอัตราที่ใช้ ต้องอ้างอิงกฎที่ฝ่ายภาษีอนุมัติ",
        "ระบบมาตรฐานมีการอ่านใบแจ้งหนี้ การจับคู่ และภาษีไทยอยู่แล้ว เราเสริมการตรวจข้ามเอกสารและขั้นตอนส่งให้ผู้เชี่ยวชาญยืนยัน เป้าหมายคือป้องกันข้อผิดพลาดและลดความเสี่ยง ไม่ใช่รับประกันว่าจะไม่มีความผิดพลาดหรือค่าปรับครับ"
      ]
    },
    "useCase": true
  },
  {
    "id": "security",
    "visual": "security",
    "theme": "dark",
    "duration": 45,
    "title": {
      "th": "ขอบเขต Zero Trust\nข้อมูลอยู่ภายใต้การควบคุมของคุณ",
      "en": "Zero-Trust Boundary:\nYour Data Stays Yours"
    },
    "subtitle": {
      "th": "Microsoft Entra ID · สิทธิ์ขั้นต่ำ · Data policies",
      "en": "Microsoft Entra ID · Least privilege · Data policies"
    },
    "takeaway": {
      "th": "กำหนดขอบเขตข้อมูล บริการ และภูมิภาคก่อนใช้งาน",
      "en": "Approve the data flows, services and geography first."
    },
    "labels": {
      "th": [
        "ยืนยันตัวตน",
        "จำกัดสิทธิ์",
        "ควบคุมข้อมูล",
        "เก็บหลักฐาน"
      ],
      "en": [
        "Authenticate",
        "Authorize",
        "Data controls",
        "Audit"
      ]
    },
    "sources": [
      "security",
      "geo",
      "location",
      "governance"
    ],
    "notes": {
      "th": "ความไว้วางใจต้องเริ่มจากขอบเขตข้อมูลที่อธิบายได้ครับ เราจะติดตั้งโซลูชันในสภาพแวดล้อมที่ลูกค้าควบคุม ใช้ไมโครซอฟท์ เอนทรา ไอดี และให้สิทธิ์เท่าที่จำเป็น พร้อมกำหนดปลายทางเชื่อมต่อและการเก็บประวัติ\n\nไมโครซอฟท์ระบุว่าไม่นำข้อมูลลูกค้าไปฝึกโมเดลพื้นฐานของอะซัวร์ โอเพนเอไอ แต่ไม่ได้หมายความว่าทุกขั้นตอนประมวลผลอยู่ภายในเทแนนต์เดียว หรือภายในประเทศเดียวเสมอ\n\nก่อนเปิดใช้งาน เราจึงต้องเห็นแผนผังว่าข้อมูลผ่านบริการใด เก็บที่ไหน และใครเข้าถึงได้ หากใช้การค้นเว็บหรือบริการภายนอก ต้องประเมินและอนุมัติแยกครับ",
      "en": "Trust starts with an explicit data boundary. We propose customer-controlled environments, Microsoft Entra ID, least-privilege roles and approved connector policies. Microsoft states that customer data is not used to train Azure OpenAI foundation models. That commitment should not be confused with a guarantee that every processing step stays physically inside one tenant or one country. Copilot Studio services, connectors and geography settings affect data movement and retention. Before launch, the customer approves a data-flow map, access model and retention policy. Any external service or web search requires a separate review. Every permitted action must still pass ERP authorization and validation."
    },
    "chapter": "06 / ZERO-TRUST BOUNDARY",
    "audio": {
      "th": "assets/audio/v3/th-06.mp3",
      "en": "assets/audio/v3/en-06.mp3"
    },
    "speechSegments": {
      "th": [
        "ความไว้วางใจต้องเริ่มจากขอบเขตข้อมูลที่อธิบายได้ครับ เราจะติดตั้งโซลูชันในสภาพแวดล้อมที่ลูกค้าควบคุม ใช้ไมโครซอฟท์ เอนทรา ไอดี และให้สิทธิ์เท่าที่จำเป็น พร้อมกำหนดปลายทางเชื่อมต่อและการเก็บประวัติ",
        "ไมโครซอฟท์ระบุว่าไม่นำข้อมูลลูกค้าไปฝึกโมเดลพื้นฐานของอะซัวร์ โอเพนเอไอ แต่ไม่ได้หมายความว่าทุกขั้นตอนประมวลผลอยู่ภายในเทแนนต์เดียว หรือภายในประเทศเดียวเสมอ",
        "ก่อนเปิดใช้งาน เราจึงต้องเห็นแผนผังว่าข้อมูลผ่านบริการใด เก็บที่ไหน และใครเข้าถึงได้ หากใช้การค้นเว็บหรือบริการภายนอก ต้องประเมินและอนุมัติแยกครับ"
      ]
    },
    "useCase": false
  },
  {
    "id": "autonomy",
    "visual": "autonomy",
    "theme": "light",
    "duration": 45,
    "title": {
      "th": "คนกำกับการตัดสินใจ\nอำนาจของ Agent สามระดับ",
      "en": "Human-in-the-Loop:\n3 Tiers of Agent Autonomy"
    },
    "subtitle": {
      "th": "ขยายอำนาจ เมื่อผลการทดสอบรองรับ",
      "en": "Increase authority when evidence supports it."
    },
    "takeaway": {
      "th": "เริ่ม Tier 2: ช่วยร่าง และให้คนอนุมัติทุกการเขียนข้อมูล",
      "en": "Start at Tier 2: draft, then approve every write."
    },
    "labels": {
      "th": [
        "Tier 1",
        "Tier 2",
        "Tier 3",
        "อ่านและสรุป",
        "ร่าง รออนุมัติ",
        "ทำตามขอบเขต",
        "สิทธิ์อ่าน",
        "คนตัดสินใจ",
        "เพดาน / เงื่อนไข"
      ],
      "en": [
        "Tier 1",
        "Tier 2",
        "Tier 3",
        "Read & explain",
        "Draft & approve",
        "Bounded execution",
        "Read access",
        "Human decision",
        "Limits / conditions"
      ]
    },
    "sources": [
      "security",
      "governance",
      "mcp"
    ],
    "notes": {
      "th": "เราแบ่งอำนาจของเอเจนต์เป็นสามระดับครับ ระดับแรก อ่านและสรุปข้อมูล โดยไม่แก้รายการ ระดับที่สอง เตรียมร่างและหลักฐาน แล้วรอคนอนุมัติก่อนบันทึก และระดับที่สาม ทำรายการอัตโนมัติได้เฉพาะเงื่อนไขที่กำหนดไว้ล่วงหน้า\n\nเงื่อนไขไม่ได้มีเพียงวงเงิน ต้องรวมผลกระทบต่อแผนผลิต ประเภทภาษี ความมั่นใจของข้อมูล และรายการที่ห้ามทำด้วย ทั้งสองกรณีในวันนี้ เราเสนอให้เริ่มจากระดับที่สอง\n\nหากจะขยายอำนาจ ต้องมีผลประเมินรองรับ มีบันทึกผู้อนุมัติ ตรวจข้อมูลซ้ำก่อนเขียน และมีทางหยุดงานเมื่อเกิดข้อผิดพลาด คนยังคงเป็นเจ้าของการตัดสินใจครับ",
      "en": "We propose three autonomy tiers. Tier one reads and explains, without changing transactions. Tier two prepares a draft and waits for an authorized person to approve. Tier three executes only within predefined limits. Those limits must cover more than money. They also include production impact, tax uncertainty, data confidence and prohibited actions. Both pilot workflows should start at tier two. Increasing authority requires evaluation evidence, not simply a configuration switch. We need an approval record, a fresh-data check, duplicate protection and a stop path. The business owner remains accountable for the policy and the decision to expand authority."
    },
    "chapter": "07 / HUMAN IN THE LOOP",
    "audio": {
      "th": "assets/audio/v3/th-07.mp3",
      "en": "assets/audio/v3/en-07.mp3"
    },
    "speechSegments": {
      "th": [
        "เราแบ่งอำนาจของเอเจนต์เป็นสามระดับครับ ระดับแรก อ่านและสรุปข้อมูล โดยไม่แก้รายการ ระดับที่สอง เตรียมร่างและหลักฐาน แล้วรอคนอนุมัติก่อนบันทึก และระดับที่สาม ทำรายการอัตโนมัติได้เฉพาะเงื่อนไขที่กำหนดไว้ล่วงหน้า",
        "เงื่อนไขไม่ได้มีเพียงวงเงิน ต้องรวมผลกระทบต่อแผนผลิต ประเภทภาษี ความมั่นใจของข้อมูล และรายการที่ห้ามทำด้วย ทั้งสองกรณีในวันนี้ เราเสนอให้เริ่มจากระดับที่สอง",
        "หากจะขยายอำนาจ ต้องมีผลประเมินรองรับ มีบันทึกผู้อนุมัติ ตรวจข้อมูลซ้ำก่อนเขียน และมีทางหยุดงานเมื่อเกิดข้อผิดพลาด คนยังคงเป็นเจ้าของการตัดสินใจครับ"
      ]
    },
    "useCase": false
  },
  {
    "id": "priorities",
    "visual": "sequence",
    "theme": "dark",
    "duration": 45,
    "title": {
      "th": "ลำดับการนำไปใช้\nพิสูจน์คุณค่า ก่อนขยายผล",
      "en": "Implementation Sequence:\nFrom Proof-of-Value to Scale"
    },
    "subtitle": {
      "th": "Wave 1: Vendor Email + Tax Scan",
      "en": "Wave 1: Vendor Email + Tax Scan"
    },
    "takeaway": {
      "th": "เทียบ Standard ก่อนสร้าง และกำหนดเกณฑ์ผ่านแต่ละขั้น",
      "en": "Benchmark standard first. Set an exit gate for each step."
    },
    "labels": {
      "th": [
        "เทียบมาตรฐาน",
        "กำหนดกฎ",
        "ทดลองควบคุม",
        "ขยายผล",
        "Wave 1 · สองกระบวนการ"
      ],
      "en": [
        "Benchmark",
        "Configure",
        "Pilot",
        "Scale",
        "Wave 1 · Two workflows"
      ]
    },
    "sources": [
      "procurement",
      "impact",
      "capture",
      "thaiTax",
      "governance"
    ],
    "notes": {
      "th": "ลำดับการเริ่มทำมีสี่ขั้นครับ ขั้นแรก ทดสอบความสามารถมาตรฐานกับตัวอย่างงานจริง หากทำได้ครบ เราจะเน้นการตั้งค่าและการนำไปใช้ ขั้นที่สอง ระบุส่วนที่ยังขาด และกำหนดกฎร่วมกับเจ้าของกระบวนการ\n\nขั้นที่สาม ทดลองสองกระบวนการในขอบเขตเล็ก ใช้กล่องอีเมลที่อนุมัติ หนึ่งนิติบุคคล และชุดเอกสารที่ตรวจคำตอบไว้แล้ว ขั้นที่สี่ ค่อยขยายปริมาณหรือหน่วยงาน เมื่อผลลัพธ์ผ่านเกณฑ์\n\nงานอีเมลคู่ค้าและเอกสารภาษีจึงเป็นเวฟแรกที่เสนอ ความพร้อมและความคุ้มค่าต้องยืนยันจากข้อมูลลูกค้า เราจะไม่เพิ่มงานสร้างเอเจนต์ หากมาตรฐานตอบโจทย์ได้อยู่แล้วครับ",
      "en": "Implementation follows four gates: benchmark, configure, pilot and scale. First, run representative cases through the existing Microsoft experience. If configuration meets the need, use it. Next, document the remaining gap and agree the company’s rules with process owners. Then pilot the two workflows in a narrow scope: an approved mailbox, one legal entity and documents with verified answers. Scale only after the agreed evidence supports it. Vendor email and tax scanning are our proposed first wave, with readiness and value still to be confirmed. This sequence keeps the Fujitsu engagement focused on useful operational change and avoids duplicating a platform feature that already works."
    },
    "chapter": "08 / IMPLEMENTATION SEQUENCE",
    "audio": {
      "th": "assets/audio/v3/th-08.mp3",
      "en": "assets/audio/v3/en-08.mp3"
    },
    "speechSegments": {
      "th": [
        "ลำดับการเริ่มทำมีสี่ขั้นครับ ขั้นแรก ทดสอบความสามารถมาตรฐานกับตัวอย่างงานจริง หากทำได้ครบ เราจะเน้นการตั้งค่าและการนำไปใช้ ขั้นที่สอง ระบุส่วนที่ยังขาด และกำหนดกฎร่วมกับเจ้าของกระบวนการ",
        "ขั้นที่สาม ทดลองสองกระบวนการในขอบเขตเล็ก ใช้กล่องอีเมลที่อนุมัติ หนึ่งนิติบุคคล และชุดเอกสารที่ตรวจคำตอบไว้แล้ว ขั้นที่สี่ ค่อยขยายปริมาณหรือหน่วยงาน เมื่อผลลัพธ์ผ่านเกณฑ์",
        "งานอีเมลคู่ค้าและเอกสารภาษีจึงเป็นเวฟแรกที่เสนอ ความพร้อมและความคุ้มค่าต้องยืนยันจากข้อมูลลูกค้า เราจะไม่เพิ่มงานสร้างเอเจนต์ หากมาตรฐานตอบโจทย์ได้อยู่แล้วครับ"
      ]
    },
    "useCase": false
  },
  {
    "id": "pilot",
    "visual": "pilot",
    "theme": "light",
    "duration": 60,
    "title": {
      "th": "เส้นทางนำร่อง 10 สัปดาห์\nคุณค่าจากมุมลูกค้าและฟูจิตสึ",
      "en": "10-Week Pilot Journey:\nDual-Perspective ROI"
    },
    "subtitle": {
      "th": "เวลา / คุณภาพ / ความเสี่ยง / ต้นทุนต่อรายการ",
      "en": "Time / quality / risk / cost per case"
    },
    "takeaway": {
      "th": "เป้าท้าทาย: ลดเวลาสืบค้น 70% ต้องวัดเทียบฐานจริง",
      "en": "Stretch target: 70% less investigation, measured against baseline."
    },
    "labels": {
      "th": [
        "1–2",
        "3–4",
        "5–7",
        "8–10",
        "ฐานข้อมูล",
        "ออกแบบ",
        "สร้าง / ทดสอบ",
        "ประเมิน",
        "ลูกค้า",
        "ฟูจิตสึ ประเทศไทย"
      ],
      "en": [
        "1–2",
        "3–4",
        "5–7",
        "8–10",
        "Baseline",
        "Design",
        "Build / evaluate",
        "Pilot / decide",
        "Customer",
        "Fujitsu Thailand"
      ]
    },
    "sources": [
      "governance",
      "security",
      "procurement",
      "capture"
    ],
    "notes": {
      "th": "แผนนำร่องตัวอย่างใช้เวลาสิบสัปดาห์ ขึ้นกับความพร้อมของข้อมูล สิทธิ์ และทีมงานครับ สองสัปดาห์แรก เก็บเวลางานเดิมและทดสอบมาตรฐาน สัปดาห์ที่สามถึงสี่ ออกแบบการเชื่อมต่อ กฎ และขั้นตอนอนุมัติ\n\nสัปดาห์ที่ห้าถึงเจ็ด สร้างและประเมินกับกรณีที่มีคำตอบตรวจแล้ว รวมทั้งอีเมลซ้ำ เอกสารอ่านไม่ชัด และคำขอที่เกินสิทธิ์ ส่วนสามสัปดาห์สุดท้าย ทดลองกับผู้ใช้ในขอบเขตที่ควบคุม ก่อนตัดสินใจเดินหน้าหรือปรับแผน\n\nมุมลูกค้า เราวัดเวลาสืบค้น ความถูกต้อง รายการเสี่ยงที่ตรวจพบ และต้นทุนรวมต่อเรื่อง การลดเวลาร้อยละเจ็ดสิบเป็นเป้าท้าทาย ไม่ใช่ผลลัพธ์ที่รับรอง ส่วนการไม่มีค่าปรับไม่สามารถพิสูจน์จากโครงการระยะสั้นได้\n\nมุมฟูจิตสึ เราได้แนวทางส่งมอบที่ใช้ซ้ำได้ และยกระดับบทบาทสู่คู่คิดด้านเอไอเชิงกลยุทธ์ โดยคิดความคุ้มค่ารวมค่าบริการเอไอ การเชื่อมต่อ และเวลาของผู้ตรวจด้วยครับ",
      "en": "The illustrative pilot runs for ten weeks, subject to data access and team readiness. Weeks one and two establish the baseline and benchmark standard capabilities. Weeks three and four define the integrations, policies and approval design. Weeks five to seven build and evaluate against verified cases, including duplicates, poor scans and unauthorized requests. Weeks eight to ten run a controlled user pilot and make a proceed-or-change decision. Customer value is measured in investigation time, review quality, risk detection and total cost per case. A seventy percent time reduction is a stretch target, not a guaranteed result. A short pilot cannot establish a promise of zero tax penalties. Fujitsu Thailand gains reusable delivery knowledge and a stronger strategic AI role. The financial assessment must include licenses, AI consumption, integration work and human review time."
    },
    "chapter": "09 / 10-WEEK PILOT",
    "audio": {
      "th": "assets/audio/v3/th-09.mp3",
      "en": "assets/audio/v3/en-09.mp3"
    },
    "speechSegments": {
      "th": [
        "แผนนำร่องตัวอย่างใช้เวลาสิบสัปดาห์ ขึ้นกับความพร้อมของข้อมูล สิทธิ์ และทีมงานครับ สองสัปดาห์แรก เก็บเวลางานเดิมและทดสอบมาตรฐาน สัปดาห์ที่สามถึงสี่ ออกแบบการเชื่อมต่อ กฎ และขั้นตอนอนุมัติ",
        "สัปดาห์ที่ห้าถึงเจ็ด สร้างและประเมินกับกรณีที่มีคำตอบตรวจแล้ว รวมทั้งอีเมลซ้ำ เอกสารอ่านไม่ชัด และคำขอที่เกินสิทธิ์ ส่วนสามสัปดาห์สุดท้าย ทดลองกับผู้ใช้ในขอบเขตที่ควบคุม ก่อนตัดสินใจเดินหน้าหรือปรับแผน",
        "มุมลูกค้า เราวัดเวลาสืบค้น ความถูกต้อง รายการเสี่ยงที่ตรวจพบ และต้นทุนรวมต่อเรื่อง การลดเวลาร้อยละเจ็ดสิบเป็นเป้าท้าทาย ไม่ใช่ผลลัพธ์ที่รับรอง ส่วนการไม่มีค่าปรับไม่สามารถพิสูจน์จากโครงการระยะสั้นได้",
        "มุมฟูจิตสึ เราได้แนวทางส่งมอบที่ใช้ซ้ำได้ และยกระดับบทบาทสู่คู่คิดด้านเอไอเชิงกลยุทธ์ โดยคิดความคุ้มค่ารวมค่าบริการเอไอ การเชื่อมต่อ และเวลาของผู้ตรวจด้วยครับ"
      ]
    },
    "useCase": false
  },
  {
    "id": "closing",
    "visual": "closing",
    "theme": "dark",
    "duration": 35,
    "title": {
      "th": "Fujitsu Red Infinity\n× Copilot",
      "en": "Executive Finale:\nFujitsu Red Infinity × Copilot"
    },
    "subtitle": {
      "th": "ออกแบบอนาคตของการทำงานร่วมกัน",
      "en": "Customizing the Future, together"
    },
    "takeaway": {
      "th": "สองกระบวนการ · หนึ่ง pilot · หลักฐานก่อนขยายผล",
      "en": "Two workflows. One pilot. Evidence before scale."
    },
    "labels": {
      "th": [
        "คำถามและข้อเสนอแนะ"
      ],
      "en": [
        "Questions & discussion"
      ]
    },
    "sources": [
      "logo",
      "governance"
    ],
    "notes": {
      "th": "ฟูจิตสึ ประเทศไทย สามารถนำความเข้าใจธุรกิจและประสบการณ์ไดนามิกส์ มาทำงานร่วมกับเทคโนโลยีเอไอของไมโครซอฟท์ เพื่อให้ข้อมูลนำไปสู่การลงมือทำที่ตรวจสอบได้ครับ\n\nข้อเสนอวันนี้คือเริ่มจากสองกระบวนการที่ชัดเจน มีเจ้าของงาน มีขอบเขตอำนาจ และมีผลลัพธ์ที่วัดได้ สิ่งที่ขอจากผู้บริหาร คือผู้สนับสนุนโครงการ ตัวแทนจัดซื้อและภาษี และข้อมูลตัวอย่างที่ได้รับอนุมัติ เพื่อเริ่มพิสูจน์คุณค่าร่วมกัน ขอบคุณครับ ยินดีรับคำถามและข้อเสนอแนะครับ",
      "en": "Fujitsu Thailand can combine business understanding, Dynamics expertise and Microsoft AI technology to help customers act on their information with control. Our proposal is two defined workflows, one measured pilot and an evidence-based decision before scaling. We ask for an executive sponsor, procurement and tax owners, and approved sample data. The red infinity represents the continuing connection between people, enterprise knowledge and responsible action. Thank you. I welcome your questions and suggestions on where this approach could create the most useful change for your organization."
    },
    "chapter": "10 / FUJITSU THAILAND",
    "audio": {
      "th": "assets/audio/v3/th-10.mp3",
      "en": "assets/audio/v3/en-10.mp3"
    },
    "speechSegments": {
      "th": [
        "ฟูจิตสึ ประเทศไทย สามารถนำความเข้าใจธุรกิจและประสบการณ์ไดนามิกส์ มาทำงานร่วมกับเทคโนโลยีเอไอของไมโครซอฟท์ เพื่อให้ข้อมูลนำไปสู่การลงมือทำที่ตรวจสอบได้ครับ",
        "ข้อเสนอวันนี้คือเริ่มจากสองกระบวนการที่ชัดเจน มีเจ้าของงาน มีขอบเขตอำนาจ และมีผลลัพธ์ที่วัดได้ สิ่งที่ขอจากผู้บริหาร คือผู้สนับสนุนโครงการ ตัวแทนจัดซื้อและภาษี และข้อมูลตัวอย่างที่ได้รับอนุมัติ เพื่อเริ่มพิสูจน์คุณค่าร่วมกัน ขอบคุณครับ ยินดีรับคำถามและข้อเสนอแนะครับ"
      ]
    },
    "useCase": false
  }
];
