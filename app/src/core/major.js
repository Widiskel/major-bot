const a2_0x5e880d = a2_0x68c9;
function a2_0x68c9(_0x53a295, _0x4e1def) {
  const _0x35bd45 = a2_0x35bd();
  return (
    (a2_0x68c9 = function (_0x68c959, _0x3344fd) {
      _0x68c959 = _0x68c959 - 0x149;
      let _0x2f3dc8 = _0x35bd45[_0x68c959];
      return _0x2f3dc8;
    }),
    a2_0x68c9(_0x53a295, _0x4e1def)
  );
}
(function (_0x47ee9c, _0x7d88a7) {
  const _0x178708 = a2_0x68c9,
    _0x12cc59 = _0x47ee9c();
  while (!![]) {
    try {
      const _0x1f9fd4 =
        parseInt(_0x178708(0x17f)) / 0x1 +
        parseInt(_0x178708(0x16b)) / 0x2 +
        parseInt(_0x178708(0x15c)) / 0x3 +
        (-parseInt(_0x178708(0x182)) / 0x4) *
          (parseInt(_0x178708(0x161)) / 0x5) +
        parseInt(_0x178708(0x175)) / 0x6 +
        (-parseInt(_0x178708(0x176)) / 0x7) *
          (-parseInt(_0x178708(0x17b)) / 0x8) +
        -parseInt(_0x178708(0x16e)) / 0x9;
      if (_0x1f9fd4 === _0x7d88a7) break;
      else _0x12cc59["push"](_0x12cc59["shift"]());
    } catch (_0x20aa38) {
      _0x12cc59["push"](_0x12cc59["shift"]());
    }
  }
})(a2_0x35bd, 0x930ac);
import { API } from "../api/api.js";
import { Helper } from "../utils/helper.js";
function a2_0x35bd() {
  const _0x7ada10 = [
    "8617968qTlncE",
    "Successfully\x20Init\x20Hold\x20Coin\x20Game",
    "/api/swipe_coin/",
    "claimSwipeCoinGame",
    "dailyTask",
    "Successfully\x20CLaim\x20Hold\x20Coin\x20Game\x20Reward",
    "title",
    "1324734AcAyMb",
    "1701119cQIRvO",
    "Claiming\x20Hold\x20Coin\x20Game\x20With\x20Score\x20",
    "getDailyTask",
    "Try\x20To\x20Completing\x20Task\x20",
    "completeTask",
    "8EnNDMn",
    "Successfully\x20Get\x20user\x20Data",
    "/api/auth/tg/",
    "Successfully\x20Init\x20Swipe\x20Coin\x20Game",
    "638888PbtmbH",
    "claimCoinGame",
    "/api/users/",
    "82352uWyHKP",
    "getTask",
    "Successfully\x20Play\x20Roulete\x20Game\x20Got\x20",
    "Playing\x20Roulete\x20Game...",
    "...",
    "account",
    "Getting\x20user\x20data...",
    "Getting\x20Daily\x20Task...",
    "Try\x20to\x20Login...",
    "\x20Complete\x20Task\x20",
    "message",
    "login",
    "Try\x20to\x20Daily\x20Check\x20In...",
    "initSwipeCoinGame",
    "status",
    "POST",
    "getUser",
    "/api/tasks/?is_daily=true",
    "token",
    "Successfully\x20CLaim\x20Swipe\x20Coin\x20Game\x20Reward",
    "Successfully\x20Get\x20Task",
    "query",
    "Error\x20:\x20",
    "Initializing\x20Swipe\x20Coin\x20Game...",
    "playingRuletteGame",
    "1994673PmKLVR",
    "fetch",
    "delay",
    "Successfully\x20Get\x20Daily\x20Task",
    "initCoinGame",
    "145ObAkjt",
    "Successfully",
    "GET",
    "Initializing\x20Hold\x20Coin\x20Game...",
    "/api/bonuses/coins/",
    "/api/tasks/",
    "/api/tasks/?is_daily=false",
    "random",
    "detail",
    "Successfully\x20Login",
    "778606nGKyYC",
    "/api/user-visits/streak/",
    "Getting\x20Task...",
  ];
  a2_0x35bd = function () {
    return _0x7ada10;
  };
  return a2_0x35bd();
}
import a2_0x2f4a24 from "../utils/logger.js";
export class Major extends API {
  constructor(_0x3cdb96, _0x555f09, _0x2270a6, _0x1e9d7b) {
    const _0x3aaab5 = a2_0x68c9;
    super(_0x555f09, "https://major.glados.app", _0x1e9d7b),
      (this[_0x3aaab5(0x187)] = _0x3cdb96),
      (this[_0x3aaab5(0x158)] = _0x555f09),
      (this["queryObj"] = _0x2270a6);
  }
  async [a2_0x5e880d(0x14e)]() {
    const _0x44bdc0 = a2_0x5e880d;
    try {
      await Helper[_0x44bdc0(0x15e)](
        0x1f4,
        this[_0x44bdc0(0x187)],
        _0x44bdc0(0x14b),
        this
      );
      const _0xa7f324 = { init_data: this[_0x44bdc0(0x158)] },
        _0x15f252 = await this[_0x44bdc0(0x15d)](
          _0x44bdc0(0x17d),
          _0x44bdc0(0x152),
          undefined,
          _0xa7f324
        );
      await Helper[_0x44bdc0(0x15e)](
        0x3e8,
        this[_0x44bdc0(0x187)],
        _0x44bdc0(0x16a),
        this
      ),
        (this["token"] = _0x15f252["access_token"]);
    } catch (_0x3d3567) {
      throw _0x3d3567;
    }
  }
  async [a2_0x5e880d(0x153)](_0x34472e = ![]) {
    const _0x4df0d5 = a2_0x5e880d;
    try {
      if (_0x34472e)
        await Helper[_0x4df0d5(0x15e)](
          0x1f4,
          this[_0x4df0d5(0x187)],
          _0x4df0d5(0x149),
          this
        );
      const _0x3cb94e = await this["fetch"](
        _0x4df0d5(0x181) + this[_0x4df0d5(0x187)]["id"] + "/",
        _0x4df0d5(0x163),
        this[_0x4df0d5(0x155)]
      );
      if (_0x3cb94e["status"] == 0xc8) {
        if (_0x34472e)
          await Helper["delay"](0x3e8, this["account"], _0x4df0d5(0x17c), this);
        this["user"] = _0x3cb94e;
      } else
        await Helper["delay"](
          0x1388,
          this["account"],
          _0x4df0d5(0x159) + _0x3cb94e[_0x4df0d5(0x14d)],
          this
        );
    } catch (_0x31bc83) {
      throw _0x31bc83;
    }
  }
  async ["streak"](_0x5ee290 = ![]) {
    const _0x92322 = a2_0x5e880d;
    try {
      if (_0x5ee290)
        await Helper[_0x92322(0x15e)](
          0x1f4,
          this[_0x92322(0x187)],
          _0x92322(0x14f),
          this
        );
      const _0x2c5685 = await this[_0x92322(0x15d)](
        _0x92322(0x16c),
        _0x92322(0x163),
        this[_0x92322(0x155)]
      );
      if (_0x2c5685["status"] == 0xc8) {
        if (_0x5ee290)
          await Helper["delay"](
            0x3e8,
            this[_0x92322(0x187)],
            "Successfully\x20Check\x20In",
            this
          );
      } else
        await Helper[_0x92322(0x15e)](
          0x1388,
          this[_0x92322(0x187)],
          _0x92322(0x159) + _0x2c5685[_0x92322(0x14d)],
          this
        );
    } catch (_0x16e2bc) {
      throw _0x16e2bc;
    }
  }
  async [a2_0x5e880d(0x183)](_0x36a8bf = ![]) {
    const _0x436ab3 = a2_0x5e880d;
    try {
      if (_0x36a8bf)
        await Helper[_0x436ab3(0x15e)](
          0x1f4,
          this["account"],
          _0x436ab3(0x16d),
          this
        );
      const _0xef9379 = await this[_0x436ab3(0x15d)](
        _0x436ab3(0x167),
        _0x436ab3(0x163),
        this["token"]
      );
      if (_0xef9379[_0x436ab3(0x151)] == 0xc8) {
        if (_0x36a8bf)
          await Helper[_0x436ab3(0x15e)](
            0x3e8,
            this[_0x436ab3(0x187)],
            _0x436ab3(0x157),
            this
          );
        this["task"] = _0xef9379;
      } else
        await Helper[_0x436ab3(0x15e)](
          0x1388,
          this[_0x436ab3(0x187)],
          _0x436ab3(0x159) + _0xef9379[_0x436ab3(0x14d)],
          this
        );
    } catch (_0x5e8bfe) {
      throw _0x5e8bfe;
    }
  }
  async ["getDailyTask"](_0x120dca = ![]) {
    const _0x408717 = a2_0x5e880d;
    try {
      if (_0x120dca)
        await Helper["delay"](0x1f4, this["account"], _0x408717(0x14a), this);
      const _0x5c8aae = await this[_0x408717(0x15d)](
        _0x408717(0x154),
        _0x408717(0x163),
        this["token"]
      );
      if (_0x5c8aae[_0x408717(0x151)] == 0xc8) {
        if (_0x120dca)
          await Helper["delay"](
            0x3e8,
            this[_0x408717(0x187)],
            _0x408717(0x15f),
            this
          );
        this[_0x408717(0x172)] = _0x5c8aae;
      } else
        await Helper[_0x408717(0x15e)](
          0x1388,
          this["account"],
          _0x408717(0x159) + _0x5c8aae["message"],
          this
        );
    } catch (_0x9bda71) {
      throw _0x9bda71;
    }
  }
  async [a2_0x5e880d(0x17a)](_0x41e7d3, _0x4d78dd = !![]) {
    const _0x48c45e = a2_0x5e880d;
    try {
      if (_0x4d78dd)
        await Helper[_0x48c45e(0x15e)](
          0x7d0,
          this[_0x48c45e(0x187)],
          _0x48c45e(0x179) + _0x41e7d3[_0x48c45e(0x174)] + _0x48c45e(0x186),
          this
        );
      const _0x59d168 = { task_id: _0x41e7d3["id"] },
        _0x14297c = await this[_0x48c45e(0x15d)](
          _0x48c45e(0x166),
          _0x48c45e(0x152),
          this["token"],
          _0x59d168
        );
      if (_0x14297c["status"] == 0xc8) {
        if (_0x4d78dd)
          await Helper[_0x48c45e(0x15e)](
            0x3e8,
            this[_0x48c45e(0x187)],
            (_0x14297c["is_completed"] == !![]
              ? _0x48c45e(0x162)
              : "Failed\x20to") +
              _0x48c45e(0x14c) +
              _0x41e7d3[_0x48c45e(0x174)],
            this
          );
        await this["getTask"](),
          await this[_0x48c45e(0x178)](),
          await this[_0x48c45e(0x153)]();
      } else
        await Helper[_0x48c45e(0x15e)](
          0xbb8,
          this["account"],
          _0x48c45e(0x159) +
            _0x41e7d3[_0x48c45e(0x174)] +
            "\x20->\x20" +
            _0x14297c["detail"],
          this
        );
    } catch (_0x27228a) {
      throw _0x27228a;
    }
  }
  async [a2_0x5e880d(0x160)](_0x4e9cf6 = !![]) {
    const _0x226ca1 = a2_0x5e880d;
    try {
      if (_0x4e9cf6)
        await Helper["delay"](0x1f4, this["account"], _0x226ca1(0x164), this);
      const _0x573e30 = await this[_0x226ca1(0x15d)](
        _0x226ca1(0x165),
        _0x226ca1(0x163),
        this[_0x226ca1(0x155)]
      );
      if (_0x573e30[_0x226ca1(0x151)] == 0xc8) {
        if (_0x4e9cf6)
          await Helper[_0x226ca1(0x15e)](
            0x3e8,
            this[_0x226ca1(0x187)],
            _0x226ca1(0x16f),
            this
          );
      } else
        await Helper[_0x226ca1(0x15e)](
          0xbb8,
          this[_0x226ca1(0x187)],
          _0x226ca1(0x159) + _0x573e30["detail"],
          this
        );
    } catch (_0x4193c2) {
      throw _0x4193c2;
    }
  }
  async [a2_0x5e880d(0x180)](_0x5af495 = !![]) {
    const _0x440721 = a2_0x5e880d;
    try {
      const _0x3d2569 = Helper[_0x440721(0x168)](0x384, 0x393);
      if (_0x5af495)
        await Helper[_0x440721(0x15e)](
          0x1f4,
          this[_0x440721(0x187)],
          _0x440721(0x177) + _0x3d2569 + _0x440721(0x186),
          this
        );
      const _0x2f51dc = (_0x2f51dc = { coins: _0x3d2569 }),
        _0x4c1053 = await this["fetch"](
          _0x440721(0x165),
          _0x440721(0x152),
          this[_0x440721(0x155)]
        );
      if (_0x4c1053[_0x440721(0x151)] == 0xc8) {
        if (_0x5af495)
          await Helper[_0x440721(0x15e)](
            0x3e8,
            this[_0x440721(0x187)],
            _0x440721(0x173),
            this
          );
      } else
        await Helper[_0x440721(0x15e)](
          0xbb8,
          this["account"],
          _0x440721(0x159) + _0x4c1053["detail"],
          this
        );
    } catch (_0x5256bc) {
      throw _0x5256bc;
    }
  }
  async [a2_0x5e880d(0x150)](_0x4befa8 = !![]) {
    const _0x39ef99 = a2_0x5e880d;
    try {
      if (_0x4befa8)
        await Helper[_0x39ef99(0x15e)](
          0x1f4,
          this["account"],
          _0x39ef99(0x15a),
          this
        );
      const _0x466ce3 = await this[_0x39ef99(0x15d)](
        _0x39ef99(0x170),
        _0x39ef99(0x163),
        this[_0x39ef99(0x155)]
      );
      if (_0x466ce3[_0x39ef99(0x151)] == 0xc8) {
        if (_0x4befa8)
          await Helper[_0x39ef99(0x15e)](
            0x3e8,
            this[_0x39ef99(0x187)],
            _0x39ef99(0x17e),
            this
          );
      } else
        await Helper[_0x39ef99(0x15e)](
          0xbb8,
          this[_0x39ef99(0x187)],
          _0x39ef99(0x159) + _0x466ce3[_0x39ef99(0x169)],
          this
        );
    } catch (_0x49f7f5) {
      throw _0x49f7f5;
    }
  }
  async [a2_0x5e880d(0x171)](_0x2338ae = !![]) {
    const _0x1f8074 = a2_0x5e880d;
    try {
      const _0x455ab3 = Helper[_0x1f8074(0x168)](0x9c4, 0xbb8);
      if (_0x2338ae)
        await Helper[_0x1f8074(0x15e)](
          0x1f4,
          this["account"],
          "Claiming\x20Swipe\x20Coin\x20Game\x20With\x20Score\x20" +
            _0x455ab3 +
            _0x1f8074(0x186),
          this
        );
      const _0x97773b = (_0x97773b = { coins: _0x455ab3 }),
        _0x1d0142 = await this[_0x1f8074(0x15d)](
          _0x1f8074(0x170),
          _0x1f8074(0x152),
          this["token"]
        );
      if (_0x1d0142[_0x1f8074(0x151)] == 0xc8) {
        if (_0x2338ae)
          await Helper[_0x1f8074(0x15e)](
            0x3e8,
            this[_0x1f8074(0x187)],
            _0x1f8074(0x156),
            this
          );
      } else
        await Helper[_0x1f8074(0x15e)](
          0xbb8,
          this[_0x1f8074(0x187)],
          _0x1f8074(0x159) + _0x1d0142[_0x1f8074(0x169)],
          this
        );
    } catch (_0x1ac519) {
      throw _0x1ac519;
    }
  }
  async [a2_0x5e880d(0x15b)](_0x153af9 = !![]) {
    const _0x2e3eb6 = a2_0x5e880d;
    try {
      if (_0x153af9)
        await Helper[_0x2e3eb6(0x15e)](
          0x1f4,
          this[_0x2e3eb6(0x187)],
          _0x2e3eb6(0x185),
          this
        );
      const _0x187dfe = await this[_0x2e3eb6(0x15d)](
        "/api/roulette/",
        _0x2e3eb6(0x163),
        this[_0x2e3eb6(0x155)]
      );
      if (_0x187dfe[_0x2e3eb6(0x151)] == 0xc8) {
        if (_0x153af9)
          await Helper[_0x2e3eb6(0x15e)](
            0x3e8,
            this[_0x2e3eb6(0x187)],
            _0x2e3eb6(0x184) + _0x187dfe["rating_award"],
            this
          );
        await this[_0x2e3eb6(0x153)]();
      } else
        await Helper[_0x2e3eb6(0x15e)](
          0xbb8,
          this["account"],
          _0x2e3eb6(0x159) + _0x187dfe[_0x2e3eb6(0x169)],
          this
        );
    } catch (_0x2724cc) {
      throw _0x2724cc;
    }
  }
}
