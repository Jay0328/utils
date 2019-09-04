/**
 * interface of keycode.
 */
export type Keycode = typeof keycode;

/**
 * key of object is keyname.
 * 
 * value of object is event.keycode.
 * 
 * Some keycode different in `firefox`.
 * 
 * ```ts
 * if(event.keycode === keycode.ENTER) {
 *   // ...
 * }
 * ```
 */
export const keycode = {
  CANCEL: 3,
  HELP: 6,
  BACK_SPACE: 8,
  TAB: 9,
  CLEAR: 12,
  RETURN: 13,
  ENTER: 14,
  SHIFT: 16,
  CONTROL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESCAPE: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINTSCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  SEMICOLON_FIREFOX: 59,
  EQUALS_FIREFOX: 61,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  LEFT_CMD: 91,
  RIGHT_CMD: 93,
  CONTEXT_MENU: 93,
  NUMPAD0: 96,
  NUMPAD1: 97,
  NUMPAD2: 98,
  NUMPAD3: 99,
  NUMPAD4: 100,
  NUMPAD5: 101,
  NUMPAD6: 102,
  NUMPAD7: 103,
  NUMPAD8: 104,
  NUMPAD9: 105,
  MULTIPLY: 106,
  ADD: 107,
  SEPARATOR: 108,
  SUBTRACT: 109,
  DECIMAL: 110,
  DIVIDE: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  NUM_LOCK: 144,
  SCROLL_LOCK: 145,
  SEMICOLON: 186,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  BACK_QUOTE: 192,
  OPEN_BRACKET: 219,
  BACK_SLASH: 220,
  CLOSE_BRACKET: 221,
  QUOTE: 222,
  CMD_FIREFOX: 224,
};
