# Laugh Track — The Crypto Trading Joke

[![Laugh Track](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Rank](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/elpablo61/makefun-laugh-track-crypto/rank.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Entries](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/elpablo61/makefun-laugh-track-crypto/entries.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Reward](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/elpablo61/makefun-laugh-track-crypto/reward.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)

One line about crypto trading life, built for the
[Laugh Track: The Crypto Trading Joke Contest](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
on make.fun.

## The line

> I set a stop-loss at 78,000. The wick hit 77,980, took my stop, then closed at 79,400. My stop-loss works perfectly.

116 characters. One scene, one concept — the stop-loss wick hunt every trader
has lived through — with the turn landing in the last sentence.

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`) and refuses to run if the line ever grows past
the competition's 200-character gate.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
