function updateTime() {
    const time = new Date()
    const timeEl = document.getElementById('time')
    const dateEl = document.getElementById('date')
    const waitingEl = document.getElementById('waiting')
    /**
     * @param {number} a 
     * @param {number} n
     * @returns 
     */
    function toc(a, n = 2) { return a.toString(16).padStart(n, '0') }
    
    const color = parseInt(toc(time.getHours()) + toc(time.getMinutes()) + toc(time.getSeconds()), 16) + 0x080000
    document.body.style.backgroundColor = `#${color.toString(16)}`
    timeEl.innerText = `${time.toLocaleTimeString(undefined, { hour12: false })} #${color.toString(16)}`
    dateEl.innerText = time.toLocaleDateString()
    const textCol = color > 0x888888 ? 'black' : 'white'
    timeEl.style.color = textCol
    dateEl.style.color = textCol
    waitingEl.style.color = textCol
}
setInterval(updateTime, 1)