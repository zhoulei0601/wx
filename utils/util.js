
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const encode = function (z, y) {
  if (z && y) {
    var A = y.split(",");
    if (A.length >= 3) {
      return d(z, A[0], A[1], A[2])
    }
    return d(z, y, "", "")
  }
  return ""
}
const decode = function (z, y) {
    if (z && y) {
      var A = y.split(",");
      if (A.length >= 3) {
        return h(z, A[0], A[1], A[2])
      }
      return h(z, y, "", "")
    }
    return ""
  }

function d(W, P, A, D) {
  var G = W.length;
  var H = "";
  var T, Q, N, X, F, I;
  if (P != null && P != "") {
    T = o(P);
    X = T.length
  }
  if (A != null && A != "") {
    Q = o(A);
    F = Q.length
  }
  if (D != null && D != "") {
    N = o(D);
    I = N.length
  }
  if (G > 0) {
    if (G < 4) {
      var U = a(W);
      var E;
      if (P != null && P != "" && A != null && A != "" && D != null && D != "") {
        var S;
        var L, K, J;
        S = U;
        for (L = 0; L < X; L++) {
          S = e(S, T[L])
        }
        for (K = 0; K < F; K++) {
          S = e(S, Q[K])
        }
        for (J = 0; J < I; J++) {
          S = e(S, N[J])
        }
        E = S
      } else {
        if (P != null && P != "" && A != null && A != "") {
          var S;
          var L, K;
          S = U;
          for (L = 0; L < X; L++) {
            S = e(S, T[L])
          }
          for (K = 0; K < F; K++) {
            S = e(S, Q[K])
          }
          E = S
        } else {
          if (P != null && P != "") {
            var S;
            var L = 0;
            S = U;
            for (L = 0; L < X; L++) {
              S = e(S, T[L])
            }
            E = S
          }
        }
      }
      H = f(E)
    } else {
      var O = parseInt(G / 4);
      var M = G % 4;
      var R = 0;
      for (R = 0; R < O; R++) {
        var C = W.substring(R * 4 + 0, R * 4 + 4);
        var V = a(C);
        var E;
        if (P != null && P != "" && A != null && A != "" && D != null && D != "") {
          var S;
          var L, K, J;
          S = V;
          for (L = 0; L < X; L++) {
            S = e(S, T[L])
          }
          for (K = 0; K < F; K++) {
            S = e(S, Q[K])
          }
          for (J = 0; J < I; J++) {
            S = e(S, N[J])
          }
          E = S
        } else {
          if (P != null && P != "" && A != null && A != "") {
            var S;
            var L, K;
            S = V;
            for (L = 0; L < X; L++) {
              S = e(S, T[L])
            }
            for (K = 0; K < F; K++) {
              S = e(S, Q[K])
            }
            E = S
          } else {
            if (P != null && P != "") {
              var S;
              var L;
              S = V;
              for (L = 0; L < X; L++) {
                S = e(S, T[L])
              }
              E = S
            }
          }
        }
        H += f(E)
      }
      if (M > 0) {
        var B = W.substring(O * 4 + 0, G);
        var V = a(B);
        var E;
        if (P != null && P != "" && A != null && A != "" && D != null && D != "") {
          var S;
          var L, K, J;
          S = V;
          for (L = 0; L < X; L++) {
            S = e(S, T[L])
          }
          for (K = 0; K < F; K++) {
            S = e(S, Q[K])
          }
          for (J = 0; J < I; J++) {
            S = e(S, N[J])
          }
          E = S
        } else {
          if (P != null && P != "" && A != null && A != "") {
            var S;
            var L, K;
            S = V;
            for (L = 0; L < X; L++) {
              S = e(S, T[L])
            }
            for (K = 0; K < F; K++) {
              S = e(S, Q[K])
            }
            E = S
          } else {
            if (P != null && P != "") {
              var S;
              var L;
              S = V;
              for (L = 0; L < X; L++) {
                S = e(S, T[L])
              }
              E = S
            }
          }
        }
        H += f(E)
      }
    }
  }
  return H
}
function h(V, O, A, C) {
  var E = V.length;
  var F = "";
  var T, Q, L, W, D, H;
  if (O != null && O != "") {
    T = o(O);
    W = T.length
  }
  if (A != null && A != "") {
    Q = o(A);
    D = Q.length
  }
  if (C != null && C != "") {
    L = o(C);
    H = L.length
  }
  var N = parseInt(E / 16);
  var S = 0;
  for (S = 0; S < N; S++) {
    var B = V.substring(S * 16 + 0, S * 16 + 16);
    var G = c(B);
    var U = new Array(64);
    var P = 0;
    for (P = 0; P < 64; P++) {
      U[P] = parseInt(G.substring(P, P + 1))
    }
    var M;
    if (O != null && O != "" && A != null && A != "" && C != null && C != "") {
      var R;
      var K, J, I;
      R = U;
      for (K = H - 1; K >= 0; K--) {
        R = l(R, L[K])
      }
      for (J = D - 1; J >= 0; J--) {
        R = l(R, Q[J])
      }
      for (I = W - 1; I >= 0; I--) {
        R = l(R, T[I])
      }
      M = R
    } else {
      if (O != null && O != "" && A != null && A != "") {
        var R;
        var K, J, I;
        R = U;
        for (K = D - 1; K >= 0; K--) {
          R = l(R, Q[K])
        }
        for (J = W - 1; J >= 0; J--) {
          R = l(R, T[J])
        }
        M = R
      } else {
        if (O != null && O != "") {
          var R;
          var K, J, I;
          R = U;
          for (K = W - 1; K >= 0; K--) {
            R = l(R, T[K])
          }
          M = R
        }
      }
    }
    F += s(M)
  }
  return F
}
function o(B) {
  var y = new Array();
  var A = B.length;
  var C = parseInt(A / 4);
  var D = A % 4;
  var z = 0;
  for (z = 0; z < C; z++) {
    y[z] = a(B.substring(z * 4 + 0, z * 4 + 4))
  }
  if (D > 0) {
    y[z] = a(B.substring(z * 4 + 0, A))
  }
  return y
}
function a(G) {
  var y = G.length;
  var H = new Array(64);
  if (y < 4) {
    var E = 0,
      D = 0,
      A = 0,
      z = 0;
    for (E = 0; E < y; E++) {
      var C = G.charCodeAt(E);
      for (D = 0; D < 16; D++) {
        var F = 1,
          B = 0;
        for (B = 15; B > D; B--) {
          F *= 2
        }
        H[16 * E + D] = parseInt(C / F) % 2
      }
    }
    for (A = y; A < 4; A++) {
      var C = 0;
      for (z = 0; z < 16; z++) {
        var F = 1,
          B = 0;
        for (B = 15; B > z; B--) {
          F *= 2
        }
        H[16 * A + z] = parseInt(C / F) % 2
      }
    }
  } else {
    for (E = 0; E < 4; E++) {
      var C = G.charCodeAt(E);
      for (D = 0; D < 16; D++) {
        var F = 1;
        for (B = 15; B > D; B--) {
          F *= 2
        }
        H[16 * E + D] = parseInt(C / F) % 2
      }
    }
  }
  return H
}
function b(z) {
  var y;
  switch (z) {
    case "0000":
      y = "0";
      break;
    case "0001":
      y = "1";
      break;
    case "0010":
      y = "2";
      break;
    case "0011":
      y = "3";
      break;
    case "0100":
      y = "4";
      break;
    case "0101":
      y = "5";
      break;
    case "0110":
      y = "6";
      break;
    case "0111":
      y = "7";
      break;
    case "1000":
      y = "8";
      break;
    case "1001":
      y = "9";
      break;
    case "1010":
      y = "A";
      break;
    case "1011":
      y = "B";
      break;
    case "1100":
      y = "C";
      break;
    case "1101":
      y = "D";
      break;
    case "1110":
      y = "E";
      break;
    case "1111":
      y = "F";
      break
  }
  return y
}
function g(y) {
  var z;
  switch (y) {
    case "0":
      z = "0000";
      break;
    case "1":
      z = "0001";
      break;
    case "2":
      z = "0010";
      break;
    case "3":
      z = "0011";
      break;
    case "4":
      z = "0100";
      break;
    case "5":
      z = "0101";
      break;
    case "6":
      z = "0110";
      break;
    case "7":
      z = "0111";
      break;
    case "8":
      z = "1000";
      break;
    case "9":
      z = "1001";
      break;
    case "A":
      z = "1010";
      break;
    case "B":
      z = "1011";
      break;
    case "C":
      z = "1100";
      break;
    case "D":
      z = "1101";
      break;
    case "E":
      z = "1110";
      break;
    case "F":
      z = "1111";
      break
  }
  return z
}
function s(B) {
  var A = "";
  for (i = 0; i < 4; i++) {
    var z = 0;
    for (j = 0; j < 16; j++) {
      var y = 1;
      for (m = 15; m > j; m--) {
        y *= 2
      }
      z += B[16 * i + j] * y
    }
    if (z != 0) {
      A += String.fromCharCode(z)
    }
  }
  return A
}
function f(A) {
  var z = "";
  for (var i = 0; i < 16; i++) {
    var y = "";
    for (var j = 0; j < 4; j++) {
      y += A[i * 4 + j]
    }
    z += b(y)
  }
  return z
}
function c(y) {
  var z = "";
  for (i = 0; i < 16; i++) {
    z += g(y.substring(i, i + 1))
  }
  return z
}
function e(z, J) {
  var M = t(J);
  var I = w(z);
  var A = new Array(32);
  var L = new Array(32);
  var E = new Array(32);
  var H = 0,
    G = 0,
    F = 0,
    D = 0,
    C = 0;
  for (F = 0; F < 32; F++) {
    A[F] = I[F];
    L[F] = I[32 + F]
  }
  for (H = 0; H < 16; H++) {
    for (G = 0; G < 32; G++) {
      E[G] = A[G];
      A[G] = L[G]
    }
    var K = new Array(48);
    for (D = 0; D < 48; D++) {
      K[D] = M[H][D]
    }
    var y = r(q(p(r(u(L), K))), E);
    for (C = 0; C < 32; C++) {
      L[C] = y[C]
    }
  }
  var B = new Array(64);
  for (H = 0; H < 32; H++) {
    B[H] = L[H];
    B[32 + H] = A[H]
  }
  return v(B)
}
function l(z, J) {
  var M = t(J);
  var I = w(z);
  var A = new Array(32);
  var L = new Array(32);
  var E = new Array(32);
  var H = 0,
    G = 0,
    F = 0,
    D = 0,
    C = 0;
  for (F = 0; F < 32; F++) {
    A[F] = I[F];
    L[F] = I[32 + F]
  }
  for (H = 15; H >= 0; H--) {
    for (G = 0; G < 32; G++) {
      E[G] = A[G];
      A[G] = L[G]
    }
    var K = new Array(48);
    for (D = 0; D < 48; D++) {
      K[D] = M[H][D]
    }
    var y = r(q(p(r(u(L), K))), E);
    for (C = 0; C < 32; C++) {
      L[C] = y[C]
    }
  }
  var B = new Array(64);
  for (H = 0; H < 32; H++) {
    B[H] = L[H];
    B[32 + H] = A[H]
  }
  return v(B)
}
function w(z) {
  var y = new Array(64);
  for (var i = 0, m = 1, n = 0; i < 4; i++ , m += 2, n += 2) {
    for (var j = 7, k = 0; j >= 0; j-- , k++) {
      y[i * 8 + k] = z[j * 8 + m];
      y[i * 8 + k + 32] = z[j * 8 + n]
    }
  }
  return y
}
function u(y) {
  var z = new Array(48);
  for (var i = 0; i < 8; i++) {
    if (i == 0) {
      z[i * 6 + 0] = y[31]
    } else {
      z[i * 6 + 0] = y[i * 4 - 1]
    }
    z[i * 6 + 1] = y[i * 4 + 0];
    z[i * 6 + 2] = y[i * 4 + 1];
    z[i * 6 + 3] = y[i * 4 + 2];
    z[i * 6 + 4] = y[i * 4 + 3];
    if (i == 7) {
      z[i * 6 + 5] = y[0]
    } else {
      z[i * 6 + 5] = y[i * 4 + 4]
    }
  }
  return z
}
function r(A, z) {
  var y = new Array(A.length);
  for (var i = 0; i < A.length; i++) {
    y[i] = A[i] ^ z[i]
  }
  return y
}
function p(A) {
  var y = new Array(32);
  var C = "";
  var K = [
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
    [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
    [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
    [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
  ];
  var J = [
    [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
    [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
    [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
    [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
  ];
  var I = [
    [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
    [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
    [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
    [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
  ];
  var H = [
    [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
    [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
    [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
    [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
  ];
  var G = [
    [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
    [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
    [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
    [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]
  ];
  var F = [
    [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
    [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
    [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
    [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]
  ];
  var E = [
    [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
    [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
    [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
    [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]
  ];
  var D = [
    [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
    [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
    [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
    [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]
  ];
  for (var m = 0; m < 8; m++) {
    var B = 0,
      z = 0;
    B = A[m * 6 + 0] * 2 + A[m * 6 + 5];
    z = A[m * 6 + 1] * 2 * 2 * 2 + A[m * 6 + 2] * 2 * 2 + A[m * 6 + 3] * 2 + A[m * 6 + 4];
    switch (m) {
      case 0:
        C = x(K[B][z]);
        break;
      case 1:
        C = x(J[B][z]);
        break;
      case 2:
        C = x(I[B][z]);
        break;
      case 3:
        C = x(H[B][z]);
        break;
      case 4:
        C = x(G[B][z]);
        break;
      case 5:
        C = x(F[B][z]);
        break;
      case 6:
        C = x(E[B][z]);
        break;
      case 7:
        C = x(D[B][z]);
        break
    }
    y[m * 4 + 0] = parseInt(C.substring(0, 1));
    y[m * 4 + 1] = parseInt(C.substring(1, 2));
    y[m * 4 + 2] = parseInt(C.substring(2, 3));
    y[m * 4 + 3] = parseInt(C.substring(3, 4))
  }
  return y
}
function q(z) {
  var y = new Array(32);
  y[0] = z[15];
  y[1] = z[6];
  y[2] = z[19];
  y[3] = z[20];
  y[4] = z[28];
  y[5] = z[11];
  y[6] = z[27];
  y[7] = z[16];
  y[8] = z[0];
  y[9] = z[14];
  y[10] = z[22];
  y[11] = z[25];
  y[12] = z[4];
  y[13] = z[17];
  y[14] = z[30];
  y[15] = z[9];
  y[16] = z[1];
  y[17] = z[7];
  y[18] = z[23];
  y[19] = z[13];
  y[20] = z[31];
  y[21] = z[26];
  y[22] = z[2];
  y[23] = z[8];
  y[24] = z[18];
  y[25] = z[12];
  y[26] = z[29];
  y[27] = z[5];
  y[28] = z[21];
  y[29] = z[10];
  y[30] = z[3];
  y[31] = z[24];
  return y
}
function v(y) {
  var z = new Array(64);
  z[0] = y[39];
  z[1] = y[7];
  z[2] = y[47];
  z[3] = y[15];
  z[4] = y[55];
  z[5] = y[23];
  z[6] = y[63];
  z[7] = y[31];
  z[8] = y[38];
  z[9] = y[6];
  z[10] = y[46];
  z[11] = y[14];
  z[12] = y[54];
  z[13] = y[22];
  z[14] = y[62];
  z[15] = y[30];
  z[16] = y[37];
  z[17] = y[5];
  z[18] = y[45];
  z[19] = y[13];
  z[20] = y[53];
  z[21] = y[21];
  z[22] = y[61];
  z[23] = y[29];
  z[24] = y[36];
  z[25] = y[4];
  z[26] = y[44];
  z[27] = y[12];
  z[28] = y[52];
  z[29] = y[20];
  z[30] = y[60];
  z[31] = y[28];
  z[32] = y[35];
  z[33] = y[3];
  z[34] = y[43];
  z[35] = y[11];
  z[36] = y[51];
  z[37] = y[19];
  z[38] = y[59];
  z[39] = y[27];
  z[40] = y[34];
  z[41] = y[2];
  z[42] = y[42];
  z[43] = y[10];
  z[44] = y[50];
  z[45] = y[18];
  z[46] = y[58];
  z[47] = y[26];
  z[48] = y[33];
  z[49] = y[1];
  z[50] = y[41];
  z[51] = y[9];
  z[52] = y[49];
  z[53] = y[17];
  z[54] = y[57];
  z[55] = y[25];
  z[56] = y[32];
  z[57] = y[0];
  z[58] = y[40];
  z[59] = y[8];
  z[60] = y[48];
  z[61] = y[16];
  z[62] = y[56];
  z[63] = y[24];
  return z
}
function x(y) {
  var z = "";
  switch (y) {
    case 0:
      z = "0000";
      break;
    case 1:
      z = "0001";
      break;
    case 2:
      z = "0010";
      break;
    case 3:
      z = "0011";
      break;
    case 4:
      z = "0100";
      break;
    case 5:
      z = "0101";
      break;
    case 6:
      z = "0110";
      break;
    case 7:
      z = "0111";
      break;
    case 8:
      z = "1000";
      break;
    case 9:
      z = "1001";
      break;
    case 10:
      z = "1010";
      break;
    case 11:
      z = "1011";
      break;
    case 12:
      z = "1100";
      break;
    case 13:
      z = "1101";
      break;
    case 14:
      z = "1110";
      break;
    case 15:
      z = "1111";
      break
  }
  return z
}
function t(A) {
  var C = new Array(56);
  var D = new Array();
  D[0] = new Array();
  D[1] = new Array();
  D[2] = new Array();
  D[3] = new Array();
  D[4] = new Array();
  D[5] = new Array();
  D[6] = new Array();
  D[7] = new Array();
  D[8] = new Array();
  D[9] = new Array();
  D[10] = new Array();
  D[11] = new Array();
  D[12] = new Array();
  D[13] = new Array();
  D[14] = new Array();
  D[15] = new Array();
  var y = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
  for (var B = 0; B < 7; B++) {
    for (var j = 0, k = 7; j < 8; j++ , k--) {
      C[B * 8 + j] = A[8 * k + B]
    }
  }
  var B = 0;
  for (var B = 0; B < 16; B++) {
    var F = 0;
    var z = 0;
    for (var j = 0; j < y[B]; j++) {
      F = C[0];
      z = C[28];
      for (var k = 0; k < 27; k++) {
        C[k] = C[k + 1];
        C[28 + k] = C[29 + k]
      }
      C[27] = F;
      C[55] = z
    }
    var E = new Array(48);
    E[0] = C[13];
    E[1] = C[16];
    E[2] = C[10];
    E[3] = C[23];
    E[4] = C[0];
    E[5] = C[4];
    E[6] = C[2];
    E[7] = C[27];
    E[8] = C[14];
    E[9] = C[5];
    E[10] = C[20];
    E[11] = C[9];
    E[12] = C[22];
    E[13] = C[18];
    E[14] = C[11];
    E[15] = C[3];
    E[16] = C[25];
    E[17] = C[7];
    E[18] = C[15];
    E[19] = C[6];
    E[20] = C[26];
    E[21] = C[19];
    E[22] = C[12];
    E[23] = C[1];
    E[24] = C[40];
    E[25] = C[51];
    E[26] = C[30];
    E[27] = C[36];
    E[28] = C[46];
    E[29] = C[54];
    E[30] = C[29];
    E[31] = C[39];
    E[32] = C[50];
    E[33] = C[44];
    E[34] = C[32];
    E[35] = C[47];
    E[36] = C[43];
    E[37] = C[48];
    E[38] = C[38];
    E[39] = C[55];
    E[40] = C[33];
    E[41] = C[52];
    E[42] = C[45];
    E[43] = C[41];
    E[44] = C[49];
    E[45] = C[35];
    E[46] = C[28];
    E[47] = C[31];
    switch (B) {
      case 0:
        for (var m = 0; m < 48; m++) {
          D[0][m] = E[m]
        }
        break;
      case 1:
        for (var m = 0; m < 48; m++) {
          D[1][m] = E[m]
        }
        break;
      case 2:
        for (var m = 0; m < 48; m++) {
          D[2][m] = E[m]
        }
        break;
      case 3:
        for (var m = 0; m < 48; m++) {
          D[3][m] = E[m]
        }
        break;
      case 4:
        for (var m = 0; m < 48; m++) {
          D[4][m] = E[m]
        }
        break;
      case 5:
        for (var m = 0; m < 48; m++) {
          D[5][m] = E[m]
        }
        break;
      case 6:
        for (var m = 0; m < 48; m++) {
          D[6][m] = E[m]
        }
        break;
      case 7:
        for (var m = 0; m < 48; m++) {
          D[7][m] = E[m]
        }
        break;
      case 8:
        for (var m = 0; m < 48; m++) {
          D[8][m] = E[m]
        }
        break;
      case 9:
        for (var m = 0; m < 48; m++) {
          D[9][m] = E[m]
        }
        break;
      case 10:
        for (var m = 0; m < 48; m++) {
          D[10][m] = E[m]
        }
        break;
      case 11:
        for (var m = 0; m < 48; m++) {
          D[11][m] = E[m]
        }
        break;
      case 12:
        for (var m = 0; m < 48; m++) {
          D[12][m] = E[m]
        }
        break;
      case 13:
        for (var m = 0; m < 48; m++) {
          D[13][m] = E[m]
        }
        break;
      case 14:
        for (var m = 0; m < 48; m++) {
          D[14][m] = E[m]
        }
        break;
      case 15:
        for (var m = 0; m < 48; m++) {
          D[15][m] = E[m]
        }
        break
    }
  }
  return D
}
module.exports = {
  encode:encode
}
