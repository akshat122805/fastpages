---
toc: false
layout: post
description: Using JS, we can get random stocks that may lead us to increase our knowledge for the stock!
categories: [java, markdown]
title: Stock Generator and Information
---
# Testing Program's Functionality
- This js-encoded algorithm randomly selects a stock ticker, from a click of a button!

<button name="button" onclick="randomSelect()">Click for the stock of the week!</button>
<br>
<a id="Madrid Selector" href="#">STOCK</a>
<script>
const playerList = ["https://finance.yahoo.com/quote/TSLA/", "https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch", "https://finance.yahoo.com/quote/META?p=META&.tsrc=fin-srch", "https://finance.yahoo.com/quote/AMZN?p=AMZN&.tsrc=fin-srch", "https://finance.yahoo.com/quote/LCID?p=LCID&.tsrc=fin-srch", "https://finance.yahoo.com/quote/RIVN?p=RIVN&.tsrc=fin-srch"]
const playerNameList = ["TSLA = $278.23", "AAPL = $150.53", "META = $137.36", "AMZN = $119.20", "LCID = $14.26", "RIVN = $32.43"]
function randomSelect() {
    var index=Math.floor(Math.random() *playerList.length)
    document.getElementById("Madrid Selector").innerHTML = playerNameList[index]
    document.getElementById("Madrid Selector").href = playerList[index]
}

</script>

# Hope you get rich now!