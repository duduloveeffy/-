const FACTORIES_DATA = [
    {
        id: "Factory 17",
        location: "Hanoi, Vietnam",
        established: "Since 2015",
        scale: "80+ workers, 2,000 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor, Direct Collection", desc_cn: "100% 单供体，直接收集" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural women, no chemical treatment", desc_cn: "乡村女性，无化学处理，越南人" },
            { item: "主要发质 (Hair Grade)", desc: "Raw virgin hair, full cuticle, unprocessed", desc_cn: "原生处女发，毛鳞片完整，未加工" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to brown, slight natural variation", desc_cn: "自然黑到棕色，可能有轻微自然色差" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂到 613 浅金色" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Natural Wave, Body Wave, Deep Wave, Loose Wave", desc_cn: "直发、自然波浪、大波浪、深波浪、水波浪" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, No silicone, Gentle steam only for curls", desc_cn: "无酸洗、无硅油，仅对卷度做轻蒸处理" },
            { item: "月产量 (Monthly Capacity)", desc: "~500 kg per month", desc_cn: "每月约 500 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Small batch drops only to ensure quality consistency", desc_cn: "仅小批量出货，保证品质一致性" },
            { item: "质量检测 (Quality Control)", desc: "3-step QC: Raw sorting → Double drawn → Final inspection", desc_cn: "三步质检：原料分拣 → 双抽工艺 → 最终检验" },
            { item: "认证资质 (Certifications)", desc: "Internal QC videos available, no industrial chemical certificates for raw hair", desc_cn: "可提供内部质检视频，原生发无工业化学证书" },
            { item: "客户人群 (Main Clients)", desc: "Premium salon owners, wig makers, repeat wholesale buyers", desc_cn: "高端沙龙店主、假发定制师、批发回购客户" },
            { item: "售后保障 (After-Sales)", desc: "Video proof required; refund or exchange policy available", desc_cn: "需提供视频证据，支持退款或补发" },
            { item: "实拍证明 (Verification)", desc: "donor cutting video, random batch test available", desc_cn: "可提供工厂直播、供体剪发视频、随机抽检" },
            { item: "特别说明 (Special Notes)", desc: "Natural color difference may occur; we do not guarantee industrial-level color uniformity", desc_cn: "每批可能存在自然色差，不保证工业级颜色一致性" }
        ]
    },
    // 复制并修改 Factory 17 的数据，生成 Factory 1 到 Factory 34 的数据
    // 以下是示例，请根据需要修改 ID 和其他信息
    {
        id: "Factory 01",
        location: "Guangzhou, China",
        established: "Since 2010",
        scale: "120+ workers, 3,500 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Mixed Donor, Regional Collection", desc_cn: "混合供体，区域收集" },
            { item: "供体人群特征 (Donor Profile)", desc: "Urban women, some chemical treatment", desc_cn: "城市女性，部分经过化学处理" },
            { item: "主要发质 (Hair Grade)", desc: "Remy hair, machine weft", desc_cn: "雷米发，机器织发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑色" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 27 Blonde", desc_cn: "可漂到 27 浅金色" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Body Wave", desc_cn: "直发、大波浪" },
            { item: "处理工艺 (Processing)", desc: "Acid wash, Silicone coating", desc_cn: "酸洗、硅油涂层" },
            { item: "月产量 (Monthly Capacity)", desc: "~1000 kg per month", desc_cn: "每月约 1000 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Large batch production", desc_cn: "大批量生产" },
            { item: "质量检测 (Quality Control)", desc: "Final inspection only", desc_cn: "仅最终检验" },
            { item: "认证资质 (Certifications)", desc: "ISO 9001", desc_cn: "ISO 9001 认证" },
            { item: "客户人群 (Main Clients)", desc: "Online retailers, general wholesalers", desc_cn: "线上零售商，普通批发商" },
            { item: "售后保障 (After-Sales)", desc: "Standard return policy", desc_cn: "标准退货政策" },
            { item: "实拍证明 (Verification)", desc: "Product photos available", desc_cn: "可提供产品照片" },
            { item: "特别说明 (Special Notes)", desc: "Color may vary slightly between batches", desc_cn: "批次间颜色可能有轻微差异" }
        ]
    },
    // ... 请在这里添加 Factory 02 到 Factory 34 的数据
    // 您可以复制 Factory 17 的数据，然后修改 ID 和部分内容，确保有 34 个工厂
    // 例如：
    {
        id: "Factory 02",
        location: "Ho Chi Minh City, Vietnam",
        established: "Since 2018",
        scale: "50+ workers, 1,500 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor, Direct Collection", desc_cn: "100% 单供体，直接收集" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural women, no chemical treatment", desc_cn: "乡村女性，无化学处理，越南人" },
            { item: "主要发质 (Hair Grade)", desc: "Raw virgin hair, full cuticle, unprocessed", desc_cn: "原生处女发，毛鳞片完整，未加工" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑色" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂到 613 浅金色" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Deep Wave", desc_cn: "直发、深波浪" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, No silicone, Gentle steam only for curls", desc_cn: "无酸洗、无硅油，仅对卷度做轻蒸处理" },
            { item: "月产量 (Monthly Capacity)", desc: "~300 kg per month", desc_cn: "每月约 300 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Strict quality control, limited production", desc_cn: "严格质量控制，有限生产" },
            { item: "质量检测 (Quality Control)", desc: "2-step QC: Raw sorting → Final inspection", desc_cn: "两步质检：原料分拣 → 最终检验" },
            { item: "认证资质 (Certifications)", desc: "Internal QC videos available", desc_cn: "可提供内部质检视频" },
            { item: "客户人群 (Main Clients)", desc: "Boutique salons, private label brands", desc_cn: "精品沙龙，自有品牌" },
            { item: "售后保障 (After-Sales)", desc: "Case-by-case review, partial refund", desc_cn: "个案审查，部分退款" },
            { item: "实拍证明 (Verification)", desc: "Customer testimonials", desc_cn: "客户评价" },
            { item: "特别说明 (Special Notes)", desc: "Focus on ethical sourcing", desc_cn: "注重道德采购" }
        ]
    },
    // ... 确保您有 34 个工厂的数据
    // 为了节省空间，这里只列出2个完整示例，您需要自行补充到34个。
    // 最简单的方式就是复制 Factory 17 的数据 33 次，然后把 ID 改成 Factory 01, Factory 02...Factory 34
];

// 动态生成工厂列表卡片
function renderFactoryList() {
    const factoryListContainer = document.getElementById('factory-list');
    if (!factoryListContainer) return;

    factoryListContainer.innerHTML = ''; // 清空现有内容

    FACTORIES_DATA.forEach(factory => {
        const factoryCard = document.createElement('a');
        factoryCard.href = `factory-detail.html?id=${encodeURIComponent(factory.id)}`; // 传递工厂 ID
        factoryCard.classList.add('factory-card');

        factoryCard.innerHTML = `
            <div class="card-header">${factory.id}</div>
            <div class="card-body">
                <p><strong>所在地区:</strong> ${factory.location}</p>
                <p><strong>建厂时间:</strong> ${factory.established}</p>
                <p><strong>工厂规模:</strong> ${factory.scale}</p>
                <p><strong>月产量:</strong> ${factory.details.find(d => d.item.includes('月产量'))?.desc || 'N/A'}</p>
            </div>
        `;
        factoryListContainer.appendChild(factoryCard);
    });
}

// 渲染工厂详情页
function renderFactoryDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const factoryId = urlParams.get('id');

    if (!factoryId) {
        document.querySelector('.container').innerHTML = `<p>未找到工厂信息。</p>`;
        document.getElementById('detail-page-title').textContent = '工厂详情 - 未找到';
        return;
    }

    const factory = FACTORIES_DATA.find(f => f.id === factoryId);

    if (!factory) {
        document.querySelector('.container').innerHTML = `<p>工厂 "${factoryId}" 的信息不存在。</p>`;
        document.getElementById('detail-page-title').textContent = `工厂详情 - ${factoryId} (未找到)`;
        return;
    }

    // 更新页面标题
    document.getElementById('detail-page-title').textContent = `工厂详情 - ${factory.id}`;
    document.getElementById('factory-video-title').textContent = `${factory.id} 直播`;

    // 更新概览信息
    document.getElementById('detail-factory-id').textContent = `${factory.id}`;
    document.getElementById('detail-location').textContent = `${factory.location} (所在地区：${factory.location.split(', ')[1] ? factory.location.split(', ')[1].trim() : factory.location.split(', ')[0].trim()})`; // 简单的中文解析
    document.getElementById('detail-established').textContent = `${factory.established} (建厂时间：${factory.established.replace('Since ', '自 ')})`;
    document.getElementById('detail-scale').textContent = `${factory.scale} (工厂规模：${factory.scale.replace('workers', '名工人').replace('sqm workshop', '平米车间')})`;

    // 填充详细信息表格
    const detailTableBody = document.getElementById('detail-table-body');
    if (detailTableBody) {
        detailTableBody.innerHTML = ''; // 清空现有内容
        factory.details.forEach(detail => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${detail.item}</td>
                <td>${detail.desc}</td>
                <td>${detail.desc_cn}</td>
            `;
            detailTableBody.appendChild(row);
        });
    }
}
