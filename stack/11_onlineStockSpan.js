class StockSpanner {

    constructor() {
        this.st = []
        this.index = -1
    }

    next(price) {
        this.index++
        while (this.st.length && this.st[this.st.length - 1].price <= price) {
            this.st.pop()
        }
        let ans = this.index - (this.st[this.st.length-1]?.index ?? -1)
        this.st.push({ price, index: this.index })
        return ans
    }
}


function StockSpannerTest() {
    let x = [[100], [80], [60], [70], [60], [75], [85]]
    let stockSpanner = new StockSpanner()
    x.forEach(d => {
        stockSpanner.next(d[0])
    })
}

StockSpannerTest.run = () => {
    StockSpannerTest()
}

module.exports = StockSpannerTest