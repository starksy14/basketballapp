import './boxcontainer.css';
import {generateSanJoseStateNames, SanJoseStateComponent} from './SanJoseStateNames';
import {AbileneChristianSumG1} from './AbileneChristianBox';

var SanJoseStateG1TwoFG1 = Math.floor(Math.random() * 6 + 2);
var SanJoseStateG1TwoFG2 = Math.floor(Math.random() * 6 + 2);
var SanJoseStateG1TwoFG3 = Math.floor(Math.random() * 6 + 2);
var SanJoseStateG1TwoFG4 = Math.floor(Math.random() * 6 + 2);
var SanJoseStateG1TwoFG5 = Math.floor(Math.random() * 6 + 2);
var SanJoseStateG1TwoFG6 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1TwoFG7 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1TwoFG8 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1TwoFG9 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1TwoFG10 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG1 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG2 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG3 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG4 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG5 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG6 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG7 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG8 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG9 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1ThreeFG10 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1TwoFGAtt1 = Math.floor(
  Math.random() * 10 + SanJoseStateG1TwoFG1
);
var SanJoseStateG1TwoFGAtt2 = Math.floor(
  Math.random() * 10 + SanJoseStateG1TwoFG2
);
var SanJoseStateG1TwoFGAtt3 = Math.floor(
  Math.random() * 10 + SanJoseStateG1TwoFG3
);
var SanJoseStateG1TwoFGAtt4 = Math.floor(
  Math.random() * 10 + SanJoseStateG1TwoFG4
);
var SanJoseStateG1TwoFGAtt5 = Math.floor(
  Math.random() * 10 + SanJoseStateG1TwoFG5
);
var SanJoseStateG1TwoFGAtt6 = Math.floor(
  Math.random() * 5 + SanJoseStateG1TwoFG6
);
var SanJoseStateG1TwoFGAtt7 = Math.floor(
  Math.random() * 5 + SanJoseStateG1TwoFG7
);
var SanJoseStateG1TwoFGAtt8 = Math.floor(
  Math.random() * 5 + SanJoseStateG1TwoFG8
);
var SanJoseStateG1TwoFGAtt9 = Math.floor(
  Math.random() * 5 + SanJoseStateG1TwoFG9
);
var SanJoseStateG1TwoFGAtt10 = Math.floor(
  Math.random() * 5 + SanJoseStateG1TwoFG10
);
var SanJoseStateG1ThreeFGAtt1 = Math.floor(
  Math.random() * 4 + SanJoseStateG1ThreeFG1
);
var SanJoseStateG1ThreeFGAtt2 = Math.floor(
  Math.random() * 4 + SanJoseStateG1ThreeFG2
);
var SanJoseStateG1ThreeFGAtt3 = Math.floor(
  Math.random() * 4 + SanJoseStateG1ThreeFG3
);
var SanJoseStateG1ThreeFGAtt4 = Math.floor(
  Math.random() * 4 + SanJoseStateG1ThreeFG4
);
var SanJoseStateG1ThreeFGAtt5 = Math.floor(
  Math.random() * 4 + SanJoseStateG1ThreeFG5
);
var SanJoseStateG1ThreeFGAtt6 = Math.floor(
  Math.random() * 2 + SanJoseStateG1ThreeFG6
);
var SanJoseStateG1ThreeFGAtt7 = Math.floor(
  Math.random() * 2 + SanJoseStateG1ThreeFG7
);
var SanJoseStateG1ThreeFGAtt8 = Math.floor(
  Math.random() * 2 + SanJoseStateG1ThreeFG8
);
var SanJoseStateG1ThreeFGAtt9 = Math.floor(
  Math.random() * 2 + SanJoseStateG1ThreeFG9
);
var SanJoseStateG1ThreeFGAtt10 = Math.floor(
  Math.random() * 2 + SanJoseStateG1ThreeFG10
);
var SanJoseStateG1FTM1 = Math.floor(Math.random() * 4 + 1);
var SanJoseStateG1FTM2 = Math.floor(Math.random() * 4 + 1);
var SanJoseStateG1FTM3 = Math.floor(Math.random() * 4 + 1);
var SanJoseStateG1FTM4 = Math.floor(Math.random() * 4 + 1);
var SanJoseStateG1FTM5 = Math.floor(Math.random() * 4 + 1);
var SanJoseStateG1FTM6 = Math.floor(Math.random() * 2 + 1);
var SanJoseStateG1FTM7 = Math.floor(Math.random() * 2 + 1);
var SanJoseStateG1FTM8 = Math.floor(Math.random() * 2 + 1);
var SanJoseStateG1FTM9 = Math.floor(Math.random() * 2 + 1);
var SanJoseStateG1FTM10 = Math.floor(Math.random() * 2 + 1);
var SanJoseStateG1FTA1 = Math.floor(
  Math.random() * 4 + SanJoseStateG1FTM1
);
var SanJoseStateG1FTA2 = Math.floor(
  Math.random() * 4 + SanJoseStateG1FTM2
);
var SanJoseStateG1FTA3 = Math.floor(
  Math.random() * 4 + SanJoseStateG1FTM3
);
var SanJoseStateG1FTA4 = Math.floor(
  Math.random() * 4 + SanJoseStateG1FTM4
);
var SanJoseStateG1FTA5 = Math.floor(
  Math.random() * 4 + SanJoseStateG1FTM5
);
var SanJoseStateG1FTA6 = Math.floor(
  Math.random() * 2 + SanJoseStateG1FTM6
);
var SanJoseStateG1FTA7 = Math.floor(
  Math.random() * 2 + SanJoseStateG1FTM7
);
var SanJoseStateG1FTA8 = Math.floor(
  Math.random() * 2 + SanJoseStateG1FTM8
);
var SanJoseStateG1FTA9 = Math.floor(
  Math.random() * 2 + SanJoseStateG1FTM9
);
var SanJoseStateG1FTA10 = Math.floor(
  Math.random() * 2 + SanJoseStateG1FTM10
);

var SanJoseStateG1TwoFGs = [
  SanJoseStateG1TwoFG1,
  SanJoseStateG1TwoFG2,
  SanJoseStateG1TwoFG3,
  SanJoseStateG1TwoFG4,
  SanJoseStateG1TwoFG5,
  SanJoseStateG1TwoFG6,
  SanJoseStateG1TwoFG7,
  SanJoseStateG1TwoFG8,
  SanJoseStateG1TwoFG9,
  SanJoseStateG1TwoFG10
];

var SanJoseStateTwoFGSumG1 = SanJoseStateG1TwoFGs.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateG1TwoFGAtts = [
  SanJoseStateG1TwoFGAtt1,
  SanJoseStateG1TwoFGAtt2,
  SanJoseStateG1TwoFGAtt3,
  SanJoseStateG1TwoFGAtt4,
  SanJoseStateG1TwoFGAtt5,
  SanJoseStateG1TwoFGAtt6,
  SanJoseStateG1TwoFGAtt7,
  SanJoseStateG1TwoFGAtt8,
  SanJoseStateG1TwoFGAtt9,
  SanJoseStateG1TwoFGAtt10
];

var SanJoseStateTwoFGAttSumG1 = SanJoseStateG1TwoFGAtts.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateTwoFGPctG1 = (
  SanJoseStateTwoFGSumG1 / SanJoseStateTwoFGAttSumG1
).toFixed(3);

var SanJoseStateTwoFGPctG1P1 = (
  SanJoseStateG1TwoFG1 / SanJoseStateG1TwoFGAtt1
).toFixed(3);
var SanJoseStateTwoFGPctG1P2 = (
  SanJoseStateG1TwoFG2 / SanJoseStateG1TwoFGAtt2
).toFixed(3);
var SanJoseStateTwoFGPctG1P3 = (
  SanJoseStateG1TwoFG3 / SanJoseStateG1TwoFGAtt3
).toFixed(3);
var SanJoseStateTwoFGPctG1P4 = (
  SanJoseStateG1TwoFG4 / SanJoseStateG1TwoFGAtt4
).toFixed(3);
var SanJoseStateTwoFGPctG1P5 = (
  SanJoseStateG1TwoFG5 / SanJoseStateG1TwoFGAtt5
).toFixed(3);
var SanJoseStateTwoFGPctG1P6 = (
  SanJoseStateG1TwoFG6 / SanJoseStateG1TwoFGAtt6
).toFixed(3);
var SanJoseStateTwoFGPctG1P7 = (
  SanJoseStateG1TwoFG7 / SanJoseStateG1TwoFGAtt7
).toFixed(3);
var SanJoseStateTwoFGPctG1P8 = (
  SanJoseStateG1TwoFG8 / SanJoseStateG1TwoFGAtt8
).toFixed(3);
var SanJoseStateTwoFGPctG1P9 = (
  SanJoseStateG1TwoFG9 / SanJoseStateG1TwoFGAtt9
).toFixed(3);
var SanJoseStateTwoFGPctG1P10 = (
  SanJoseStateG1TwoFG10 / SanJoseStateG1TwoFGAtt10
).toFixed(3);

var SanJoseStateG1ThreeFGs = [
  SanJoseStateG1ThreeFG1,
  SanJoseStateG1ThreeFG2,
  SanJoseStateG1ThreeFG3,
  SanJoseStateG1ThreeFG4,
  SanJoseStateG1ThreeFG5,
  SanJoseStateG1ThreeFG6,
  SanJoseStateG1ThreeFG7,
  SanJoseStateG1ThreeFG8,
  SanJoseStateG1ThreeFG9,
  SanJoseStateG1ThreeFG10
];

var SanJoseStateThreeFGSumG1 = SanJoseStateG1ThreeFGs.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateG1ThreeFGAtts = [
  SanJoseStateG1ThreeFGAtt1,
  SanJoseStateG1ThreeFGAtt2,
  SanJoseStateG1ThreeFGAtt3,
  SanJoseStateG1ThreeFGAtt4,
  SanJoseStateG1ThreeFGAtt5,
  SanJoseStateG1ThreeFGAtt6,
  SanJoseStateG1ThreeFGAtt7,
  SanJoseStateG1ThreeFGAtt8,
  SanJoseStateG1ThreeFGAtt9,
  SanJoseStateG1ThreeFGAtt10
];

var SanJoseStateThreeFGAttSumG1 = SanJoseStateG1ThreeFGAtts.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateThreeFGPctG1 = (
  SanJoseStateThreeFGSumG1 / SanJoseStateThreeFGAttSumG1
).toFixed(3);

var SanJoseStateThreeFGPctG1P1 = (
  SanJoseStateG1ThreeFG1 / SanJoseStateG1ThreeFGAtt1
).toFixed(3);
var SanJoseStateThreeFGPctG1P2 = (
  SanJoseStateG1ThreeFG2 / SanJoseStateG1ThreeFGAtt2
).toFixed(3);
var SanJoseStateThreeFGPctG1P3 = (
  SanJoseStateG1ThreeFG3 / SanJoseStateG1ThreeFGAtt3
).toFixed(3);
var SanJoseStateThreeFGPctG1P4 = (
  SanJoseStateG1ThreeFG4 / SanJoseStateG1ThreeFGAtt4
).toFixed(3);
var SanJoseStateThreeFGPctG1P5 = (
  SanJoseStateG1ThreeFG5 / SanJoseStateG1ThreeFGAtt5
).toFixed(3);
var SanJoseStateThreeFGPctG1P6 = (
  SanJoseStateG1ThreeFG6 / SanJoseStateG1ThreeFGAtt6
).toFixed(3);
var SanJoseStateThreeFGPctG1P7 = (
  SanJoseStateG1ThreeFG7 / SanJoseStateG1ThreeFGAtt7
).toFixed(3);
var SanJoseStateThreeFGPctG1P8 = (
  SanJoseStateG1ThreeFG8 / SanJoseStateG1ThreeFGAtt8
).toFixed(3);
var SanJoseStateThreeFGPctG1P9 = (
  SanJoseStateG1ThreeFG9 / SanJoseStateG1ThreeFGAtt9
).toFixed(3);
var SanJoseStateThreeFGPctG1P10 = (
  SanJoseStateG1ThreeFG10 / SanJoseStateG1ThreeFGAtt10
).toFixed(3);

var SanJoseStateTotalFGsG1P1 =
  SanJoseStateG1TwoFG1 + SanJoseStateG1ThreeFG1;
var SanJoseStateTotalFGsG1P2 =
  SanJoseStateG1TwoFG2 + SanJoseStateG1ThreeFG2;
var SanJoseStateTotalFGsG1P3 =
  SanJoseStateG1TwoFG3 + SanJoseStateG1ThreeFG3;
var SanJoseStateTotalFGsG1P4 =
  SanJoseStateG1TwoFG4 + SanJoseStateG1ThreeFG4;
var SanJoseStateTotalFGsG1P5 =
  SanJoseStateG1TwoFG5 + SanJoseStateG1ThreeFG5;
var SanJoseStateTotalFGsG1P6 =
  SanJoseStateG1TwoFG6 + SanJoseStateG1ThreeFG6;
var SanJoseStateTotalFGsG1P7 =
  SanJoseStateG1TwoFG7 + SanJoseStateG1ThreeFG7;
var SanJoseStateTotalFGsG1P8 =
  SanJoseStateG1TwoFG8 + SanJoseStateG1ThreeFG8;
var SanJoseStateTotalFGsG1P9 =
  SanJoseStateG1TwoFG9 + SanJoseStateG1ThreeFG9;
var SanJoseStateTotalFGsG1P10 =
  SanJoseStateG1TwoFG10 + SanJoseStateG1ThreeFG10;

var SanJoseStateTotalFGAttsG1P1 =
  SanJoseStateG1TwoFGAtt1 + SanJoseStateG1ThreeFGAtt1;
var SanJoseStateTotalFGAttsG1P2 =
  SanJoseStateG1TwoFGAtt2 + SanJoseStateG1ThreeFGAtt2;
var SanJoseStateTotalFGAttsG1P3 =
  SanJoseStateG1TwoFGAtt3 + SanJoseStateG1ThreeFGAtt3;
var SanJoseStateTotalFGAttsG1P4 =
  SanJoseStateG1TwoFGAtt4 + SanJoseStateG1ThreeFGAtt4;
var SanJoseStateTotalFGAttsG1P5 =
  SanJoseStateG1TwoFGAtt5 + SanJoseStateG1ThreeFGAtt5;
var SanJoseStateTotalFGAttsG1P6 =
  SanJoseStateG1TwoFGAtt6 + SanJoseStateG1ThreeFGAtt6;
var SanJoseStateTotalFGAttsG1P7 =
  SanJoseStateG1TwoFGAtt7 + SanJoseStateG1ThreeFGAtt7;
var SanJoseStateTotalFGAttsG1P8 =
  SanJoseStateG1TwoFGAtt8 + SanJoseStateG1ThreeFGAtt8;
var SanJoseStateTotalFGAttsG1P9 =
  SanJoseStateG1TwoFGAtt9 + SanJoseStateG1ThreeFGAtt9;
var SanJoseStateTotalFGAttsG1P10 =
  SanJoseStateG1TwoFGAtt10 + SanJoseStateG1ThreeFGAtt10;

var SanJoseStateTotalFGPctG1P1 = (
  SanJoseStateTotalFGsG1P1 / SanJoseStateTotalFGAttsG1P1
).toFixed(3);
var SanJoseStateTotalFGPctG1P2 = (
  SanJoseStateTotalFGsG1P2 / SanJoseStateTotalFGAttsG1P2
).toFixed(3);
var SanJoseStateTotalFGPctG1P3 = (
  SanJoseStateTotalFGsG1P3 / SanJoseStateTotalFGAttsG1P3
).toFixed(3);
var SanJoseStateTotalFGPctG1P4 = (
  SanJoseStateTotalFGsG1P4 / SanJoseStateTotalFGAttsG1P4
).toFixed(3);
var SanJoseStateTotalFGPctG1P5 = (
  SanJoseStateTotalFGsG1P5 / SanJoseStateTotalFGAttsG1P5
).toFixed(3);
var SanJoseStateTotalFGPctG1P6 = (
  SanJoseStateTotalFGsG1P6 / SanJoseStateTotalFGAttsG1P6
).toFixed(3);
var SanJoseStateTotalFGPctG1P7 = (
  SanJoseStateTotalFGsG1P7 / SanJoseStateTotalFGAttsG1P7
).toFixed(3);
var SanJoseStateTotalFGPctG1P8 = (
  SanJoseStateTotalFGsG1P8 / SanJoseStateTotalFGAttsG1P8
).toFixed(3);
var SanJoseStateTotalFGPctG1P9 = (
  SanJoseStateTotalFGsG1P9 / SanJoseStateTotalFGAttsG1P9
).toFixed(3);
var SanJoseStateTotalFGPctG1P10 = (
  SanJoseStateTotalFGsG1P10 / SanJoseStateTotalFGAttsG1P10
).toFixed(3);

var SanJoseStateTotalFGsG1 =
  SanJoseStateTwoFGSumG1 + SanJoseStateThreeFGSumG1;

var SanJoseStateTotalFGAttsG1 =
  SanJoseStateTwoFGAttSumG1 + SanJoseStateThreeFGAttSumG1;

var SanJoseStateTotalFGPctG1 = (
  SanJoseStateTotalFGsG1 / SanJoseStateTotalFGAttsG1
).toFixed(3);

var SanJoseStateG1FTMs = [
  SanJoseStateG1FTM1,
  SanJoseStateG1FTM2,
  SanJoseStateG1FTM3,
  SanJoseStateG1FTM4,
  SanJoseStateG1FTM5,
  SanJoseStateG1FTM6,
  SanJoseStateG1FTM7,
  SanJoseStateG1FTM8,
  SanJoseStateG1FTM9,
  SanJoseStateG1FTM10
];

var SanJoseStateFTMSumG1 = SanJoseStateG1FTMs.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateG1FTAs = [
  SanJoseStateG1FTA1,
  SanJoseStateG1FTA2,
  SanJoseStateG1FTA3,
  SanJoseStateG1FTA4,
  SanJoseStateG1FTA5,
  SanJoseStateG1FTA6,
  SanJoseStateG1FTA7,
  SanJoseStateG1FTA8,
  SanJoseStateG1FTA9,
  SanJoseStateG1FTA10
];

var SanJoseStateFTASumG1 = SanJoseStateG1FTAs.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateFTPctG1 = (
  SanJoseStateFTMSumG1 / SanJoseStateFTASumG1
).toFixed(3);

var SanJoseStateFTPctG1P1 = (
  SanJoseStateG1FTM1 / SanJoseStateG1FTA1
).toFixed(3);
var SanJoseStateFTPctG1P2 = (
  SanJoseStateG1FTM2 / SanJoseStateG1FTA2
).toFixed(3);
var SanJoseStateFTPctG1P3 = (
  SanJoseStateG1FTM3 / SanJoseStateG1FTA3
).toFixed(3);
var SanJoseStateFTPctG1P4 = (
  SanJoseStateG1FTM4 / SanJoseStateG1FTA4
).toFixed(3);
var SanJoseStateFTPctG1P5 = (
  SanJoseStateG1FTM5 / SanJoseStateG1FTA5
).toFixed(3);
var SanJoseStateFTPctG1P6 = (
  SanJoseStateG1FTM6 / SanJoseStateG1FTA6
).toFixed(3);
var SanJoseStateFTPctG1P7 = (
  SanJoseStateG1FTM7 / SanJoseStateG1FTA7
).toFixed(3);
var SanJoseStateFTPctG1P8 = (
  SanJoseStateG1FTM8 / SanJoseStateG1FTA8
).toFixed(3);
var SanJoseStateFTPctG1P9 = (
  SanJoseStateG1FTM9 / SanJoseStateG1FTA9
).toFixed(3);
var SanJoseStateFTPctG1P10 = (
  SanJoseStateG1FTM10 / SanJoseStateG1FTA10
).toFixed(3);

var SanJoseStateG1S1 =
  SanJoseStateG1TwoFG1 * 2 +
  SanJoseStateG1ThreeFG1 * 3 +
  SanJoseStateG1FTM1;
var SanJoseStateG1S2 =
  SanJoseStateG1TwoFG2 * 2 +
  SanJoseStateG1ThreeFG2 * 3 +
  SanJoseStateG1FTM2;
var SanJoseStateG1S3 =
  SanJoseStateG1TwoFG3 * 2 +
  SanJoseStateG1ThreeFG3 * 3 +
  SanJoseStateG1FTM3;
var SanJoseStateG1S4 =
  SanJoseStateG1TwoFG4 * 2 +
  SanJoseStateG1ThreeFG4 * 3 +
  SanJoseStateG1FTM4;
var SanJoseStateG1S5 =
  SanJoseStateG1TwoFG5 * 2 +
  SanJoseStateG1ThreeFG5 * 3 +
  SanJoseStateG1FTM5;
var SanJoseStateG1S6 =
  SanJoseStateG1TwoFG6 * 2 +
  SanJoseStateG1ThreeFG6 * 3 +
  SanJoseStateG1FTM6;
var SanJoseStateG1S7 =
  SanJoseStateG1TwoFG7 * 2 +
  SanJoseStateG1ThreeFG7 * 3 +
  SanJoseStateG1FTM7;
var SanJoseStateG1S8 =
  SanJoseStateG1TwoFG8 * 2 +
  SanJoseStateG1ThreeFG8 * 3 +
  SanJoseStateG1FTM8;
var SanJoseStateG1S9 =
  SanJoseStateG1TwoFG9 * 2 +
  SanJoseStateG1ThreeFG9 * 3 +
  SanJoseStateG1FTM9;
var SanJoseStateG1S10 =
  SanJoseStateG1TwoFG10 * 2 +
  SanJoseStateG1ThreeFG10 * 3 +
  SanJoseStateG1FTM10;

var SanJoseStateTotal = [
  SanJoseStateG1S1,
  SanJoseStateG1S2,
  SanJoseStateG1S3,
  SanJoseStateG1S4,
  SanJoseStateG1S5,
  SanJoseStateG1S6,
  SanJoseStateG1S7,
  SanJoseStateG1S8,
  SanJoseStateG1S9,
  SanJoseStateG1S10
];

var SanJoseStateSumG1 = SanJoseStateTotal.reduce((a, b) => a + b, 0);

var SanJoseStateG1Rebounds1 = Math.floor(Math.random() * 10 + 0);
var SanJoseStateG1Rebounds2 = Math.floor(Math.random() * 10 + 0);
var SanJoseStateG1Rebounds3 = Math.floor(Math.random() * 10 + 0);
var SanJoseStateG1Rebounds4 = Math.floor(Math.random() * 10 + 0);
var SanJoseStateG1Rebounds5 = Math.floor(Math.random() * 10 + 0);
var SanJoseStateG1Rebounds6 = Math.floor(Math.random() * 7 + 0);
var SanJoseStateG1Rebounds7 = Math.floor(Math.random() * 7 + 0);
var SanJoseStateG1Rebounds8 = Math.floor(Math.random() * 7 + 0);
var SanJoseStateG1Rebounds9 = Math.floor(Math.random() * 7 + 0);
var SanJoseStateG1Rebounds10 = Math.floor(Math.random() * 7 + 0);

var SanJoseStateG1Rebounds = [
  SanJoseStateG1Rebounds1,
  SanJoseStateG1Rebounds2,
  SanJoseStateG1Rebounds3,
  SanJoseStateG1Rebounds4,
  SanJoseStateG1Rebounds5,
  SanJoseStateG1Rebounds6,
  SanJoseStateG1Rebounds7,
  SanJoseStateG1Rebounds8,
  SanJoseStateG1Rebounds9,
  SanJoseStateG1Rebounds10
];

var SanJoseStateSumG1Rebounds = SanJoseStateG1Rebounds.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateG1Assists1 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists2 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists3 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists4 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists5 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists6 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists7 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists8 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists9 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Assists10 = Math.floor(Math.random() * 4 + 0);

var SanJoseStateG1Assists = [
  SanJoseStateG1Assists1,
  SanJoseStateG1Assists2,
  SanJoseStateG1Assists3,
  SanJoseStateG1Assists4,
  SanJoseStateG1Assists5,
  SanJoseStateG1Assists6,
  SanJoseStateG1Assists7,
  SanJoseStateG1Assists8,
  SanJoseStateG1Assists9,
  SanJoseStateG1Assists10
];

var SanJoseStateSumG1Assists = SanJoseStateG1Assists.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateG1Steals1 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals2 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals3 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals4 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals5 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals6 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals7 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals8 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals9 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Steals10 = Math.floor(Math.random() * 2 + 0);

var SanJoseStateG1Steals = [
  SanJoseStateG1Steals1,
  SanJoseStateG1Steals2,
  SanJoseStateG1Steals3,
  SanJoseStateG1Steals4,
  SanJoseStateG1Steals5,
  SanJoseStateG1Steals6,
  SanJoseStateG1Steals7,
  SanJoseStateG1Steals8,
  SanJoseStateG1Steals9,
  SanJoseStateG1Steals10
];

var SanJoseStateSumG1Steals = SanJoseStateG1Steals.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateG1Blocks1 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks2 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks3 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks4 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks5 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks6 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks7 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks8 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks9 = Math.floor(Math.random() * 2 + 0);
var SanJoseStateG1Blocks10 = Math.floor(Math.random() * 2 + 0);

var SanJoseStateG1Blocks = [
  SanJoseStateG1Blocks1,
  SanJoseStateG1Blocks2,
  SanJoseStateG1Blocks3,
  SanJoseStateG1Blocks4,
  SanJoseStateG1Blocks5,
  SanJoseStateG1Blocks6,
  SanJoseStateG1Blocks7,
  SanJoseStateG1Blocks8,
  SanJoseStateG1Blocks9,
  SanJoseStateG1Blocks10
];

var SanJoseStateSumG1Blocks = SanJoseStateG1Blocks.reduce(
  (a, b) => a + b,
  0
);

var SanJoseStateG1Turnovers1 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers2 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers3 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers4 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers5 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers6 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers7 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers8 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers9 = Math.floor(Math.random() * 4 + 0);
var SanJoseStateG1Turnovers10 = Math.floor(Math.random() * 4 + 0);

var SanJoseStateG1Turnovers = [
  SanJoseStateG1Turnovers1,
  SanJoseStateG1Turnovers2,
  SanJoseStateG1Turnovers3,
  SanJoseStateG1Turnovers4,
  SanJoseStateG1Turnovers5,
  SanJoseStateG1Turnovers6,
  SanJoseStateG1Turnovers7,
  SanJoseStateG1Turnovers8,
  SanJoseStateG1Turnovers9,
  SanJoseStateG1Turnovers10
];

var SanJoseStateSumG1Turnovers = SanJoseStateG1Turnovers.reduce(
  (a, b) => a + b,
  0
);

while (SanJoseStateSumG1 === AbileneChristianSumG1) {
SanJoseStateG1TwoFG1 = Math.floor(Math.random() * 6 + 2);
SanJoseStateG1TwoFG2 = Math.floor(Math.random() * 6 + 2);
SanJoseStateG1TwoFG3 = Math.floor(Math.random() * 6 + 2);
SanJoseStateG1TwoFG4 = Math.floor(Math.random() * 6 + 2);
SanJoseStateG1TwoFG5 = Math.floor(Math.random() * 6 + 2);
SanJoseStateG1TwoFG6 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1TwoFG7 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1TwoFG8 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1TwoFG9 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1TwoFG10 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG1 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG2 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG3 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG4 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG5 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG6 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG7 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG8 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG9 = Math.floor(Math.random() * 2 + 0);
SanJoseStateG1ThreeFG10 = Math.floor(Math.random() * 2 + 0);
}

export default function SanJoseStateBox() {
  return (
    <div>
      <h1>San Jose State {SanJoseStateSumG1}</h1>
      <div className="grid-container">
        <h2>Player <br /><br /> <SanJoseStateComponent generateSanJoseStateNames={generateSanJoseStateNames} /></h2>
        <h2>Points<br /><br />{SanJoseStateG1S1}<br /><br />{SanJoseStateG1S2}<br /><br />{SanJoseStateG1S3}<br /><br />{SanJoseStateG1S4}<br /><br />{SanJoseStateG1S5}<br /><br />{SanJoseStateG1S6}<br /><br />{SanJoseStateG1S7}<br /><br />{SanJoseStateG1S8}<br /><br />{SanJoseStateG1S9}<br /><br />{SanJoseStateG1S10}</h2>
        <h2>2FG<br /><br />{SanJoseStateG1TwoFG1}<br /><br />{SanJoseStateG1TwoFG2}<br /><br />{SanJoseStateG1TwoFG3}<br /><br />{SanJoseStateG1TwoFG4}<br /><br />{SanJoseStateG1TwoFG5}<br /><br />{SanJoseStateG1TwoFG6}<br /><br />{SanJoseStateG1TwoFG7}<br /><br />{SanJoseStateG1TwoFG8}<br /><br />{SanJoseStateG1TwoFG9}<br /><br />{SanJoseStateG1TwoFG10}</h2>
        <h2>2FGA<br /><br />{SanJoseStateG1TwoFGAtt1}<br /><br />{SanJoseStateG1TwoFGAtt2}<br /><br />{SanJoseStateG1TwoFGAtt3}<br /><br />{SanJoseStateG1TwoFGAtt4}<br /><br />{SanJoseStateG1TwoFGAtt5}<br /><br />{SanJoseStateG1TwoFGAtt6}<br /><br />{SanJoseStateG1TwoFGAtt7}<br /><br />{SanJoseStateG1TwoFGAtt8}<br /><br />{SanJoseStateG1TwoFGAtt9}<br /><br />{SanJoseStateG1TwoFGAtt10}</h2>
        <h2>2FG%<br /><br />{isNaN(SanJoseStateTwoFGPctG1P1)  ? "0.000" : SanJoseStateTwoFGPctG1P1}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P2)  ? "0.000" : SanJoseStateTwoFGPctG1P2}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P3)  ? "0.000" : SanJoseStateTwoFGPctG1P3}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P4)  ? "0.000" : SanJoseStateTwoFGPctG1P4}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P5)  ? "0.000" : SanJoseStateTwoFGPctG1P5}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P6)  ? "0.000" : SanJoseStateTwoFGPctG1P6}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P7)  ? "0.000" : SanJoseStateTwoFGPctG1P7}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P8)  ? "0.000" : SanJoseStateTwoFGPctG1P8}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P9)  ? "0.000" : SanJoseStateTwoFGPctG1P9}<br /><br />{isNaN(SanJoseStateTwoFGPctG1P10)  ? "0.000" : SanJoseStateTwoFGPctG1P10}</h2>
        <h2>3FG<br /><br />{SanJoseStateG1ThreeFG1}<br /><br />{SanJoseStateG1ThreeFG2}<br /><br />{SanJoseStateG1ThreeFG3}<br /><br />{SanJoseStateG1ThreeFG4}<br /><br />{SanJoseStateG1ThreeFG5}<br /><br />{SanJoseStateG1ThreeFG6}<br /><br />{SanJoseStateG1ThreeFG7}<br /><br />{SanJoseStateG1ThreeFG8}<br /><br />{SanJoseStateG1ThreeFG9}<br /><br />{SanJoseStateG1ThreeFG10}</h2>
        <h2>3FGA<br /><br />{SanJoseStateG1ThreeFGAtt1}<br /><br />{SanJoseStateG1ThreeFGAtt2}<br /><br />{SanJoseStateG1ThreeFGAtt3}<br /><br />{SanJoseStateG1ThreeFGAtt4}<br /><br />{SanJoseStateG1ThreeFGAtt5}<br /><br />{SanJoseStateG1ThreeFGAtt6}<br /><br />{SanJoseStateG1ThreeFGAtt7}<br /><br />{SanJoseStateG1ThreeFGAtt8}<br /><br />{SanJoseStateG1ThreeFGAtt9}<br /><br />{SanJoseStateG1ThreeFGAtt10}</h2>
        <h2>3FG%<br /><br />{isNaN(SanJoseStateThreeFGPctG1P1)  ? "0.000" : SanJoseStateThreeFGPctG1P1}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P2)  ? "0.000" : SanJoseStateThreeFGPctG1P2}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P3)  ? "0.000" : SanJoseStateThreeFGPctG1P3}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P4)  ? "0.000" : SanJoseStateThreeFGPctG1P4}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P5)  ? "0.000" : SanJoseStateThreeFGPctG1P5}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P6)  ? "0.000" : SanJoseStateThreeFGPctG1P6}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P7)  ? "0.000" : SanJoseStateThreeFGPctG1P7}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P8)  ? "0.000" : SanJoseStateThreeFGPctG1P8}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P9)  ? "0.000" : SanJoseStateThreeFGPctG1P9}<br /><br />{isNaN(SanJoseStateThreeFGPctG1P10)  ? "0.000" : SanJoseStateThreeFGPctG1P10}</h2>
        <h2>FG<br /><br />{SanJoseStateTotalFGsG1P1}<br /><br />{SanJoseStateTotalFGsG1P2}<br /><br />{SanJoseStateTotalFGsG1P3}<br /><br />{SanJoseStateTotalFGsG1P4}<br /><br />{SanJoseStateTotalFGsG1P5}<br /><br />{SanJoseStateTotalFGsG1P6}<br /><br />{SanJoseStateTotalFGsG1P7}<br /><br />{SanJoseStateTotalFGsG1P8}<br /><br />{SanJoseStateTotalFGsG1P9}<br /><br />{SanJoseStateTotalFGsG1P10}</h2>
        <h2>FGA<br /><br />{SanJoseStateTotalFGAttsG1P1}<br /><br />{SanJoseStateTotalFGAttsG1P2}<br /><br />{SanJoseStateTotalFGAttsG1P3}<br /><br />{SanJoseStateTotalFGAttsG1P4}<br /><br />{SanJoseStateTotalFGAttsG1P5}<br /><br />{SanJoseStateTotalFGAttsG1P6}<br /><br />{SanJoseStateTotalFGAttsG1P7}<br /><br />{SanJoseStateTotalFGAttsG1P8}<br /><br />{SanJoseStateTotalFGAttsG1P9}<br /><br />{SanJoseStateTotalFGAttsG1P10}</h2>
        <h2>FG%<br /><br />{isNaN(SanJoseStateTotalFGPctG1P1)  ? "0.000" : SanJoseStateTotalFGPctG1P1}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P2)  ? "0.000" : SanJoseStateTotalFGPctG1P2}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P3)  ? "0.000" : SanJoseStateTotalFGPctG1P3}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P4)  ? "0.000" : SanJoseStateTotalFGPctG1P4}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P5)  ? "0.000" : SanJoseStateTotalFGPctG1P5}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P6)  ? "0.000" : SanJoseStateTotalFGPctG1P6}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P7)  ? "0.000" : SanJoseStateTotalFGPctG1P7}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P8)  ? "0.000" : SanJoseStateTotalFGPctG1P8}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P9)  ? "0.000" : SanJoseStateTotalFGPctG1P9}<br /><br />{isNaN(SanJoseStateTotalFGPctG1P10)  ? "0.000" : SanJoseStateTotalFGPctG1P10}</h2>
        <h2>FT<br /><br />{SanJoseStateG1FTM1}<br /><br />{SanJoseStateG1FTM2}<br /><br />{SanJoseStateG1FTM3}<br /><br />{SanJoseStateG1FTM4}<br /><br />{SanJoseStateG1FTM5}<br /><br />{SanJoseStateG1FTM6}<br /><br />{SanJoseStateG1FTM7}<br /><br />{SanJoseStateG1FTM8}<br /><br />{SanJoseStateG1FTM9}<br /><br />{SanJoseStateG1FTM10}</h2>
        <h2>FTA<br /><br />{SanJoseStateG1FTA1}<br /><br />{SanJoseStateG1FTA2}<br /><br />{SanJoseStateG1FTA3}<br /><br />{SanJoseStateG1FTA4}<br /><br />{SanJoseStateG1FTA5}<br /><br />{SanJoseStateG1FTA6}<br /><br />{SanJoseStateG1FTA7}<br /><br />{SanJoseStateG1FTA8}<br /><br />{SanJoseStateG1FTA9}<br /><br />{SanJoseStateG1FTA10}</h2>
        <h2>FT%<br /><br />{SanJoseStateFTPctG1P1}<br /><br />{SanJoseStateFTPctG1P2}<br /><br />{SanJoseStateFTPctG1P3}<br /><br />{SanJoseStateFTPctG1P4}<br /><br />{SanJoseStateFTPctG1P5}<br /><br />{SanJoseStateFTPctG1P6}<br /><br />{SanJoseStateFTPctG1P7}<br /><br />{SanJoseStateFTPctG1P8}<br /><br />{SanJoseStateFTPctG1P9}<br /><br />{SanJoseStateFTPctG1P10}</h2>
        <h2>Rebounds<br /><br />{SanJoseStateG1Rebounds1}<br /><br />{SanJoseStateG1Rebounds2}<br /><br />{SanJoseStateG1Rebounds3}<br /><br />{SanJoseStateG1Rebounds4}<br /><br />{SanJoseStateG1Rebounds5}<br /><br />{SanJoseStateG1Rebounds6}<br /><br />{SanJoseStateG1Rebounds7}<br /><br />{SanJoseStateG1Rebounds8}<br /><br />{SanJoseStateG1Rebounds9}<br /><br />{SanJoseStateG1Rebounds10}</h2>
        <h2>Assists<br /><br />{SanJoseStateG1Assists1}<br /><br />{SanJoseStateG1Assists2}<br /><br />{SanJoseStateG1Assists3}<br /><br />{SanJoseStateG1Assists4}<br /><br />{SanJoseStateG1Assists5}<br /><br />{SanJoseStateG1Assists6}<br /><br />{SanJoseStateG1Assists7}<br /><br />{SanJoseStateG1Assists8}<br /><br />{SanJoseStateG1Assists9}<br /><br />{SanJoseStateG1Assists10}</h2>
        <h2>Steals<br /><br />{SanJoseStateG1Steals1}<br /><br />{SanJoseStateG1Steals2}<br /><br />{SanJoseStateG1Steals3}<br /><br />{SanJoseStateG1Steals4}<br /><br />{SanJoseStateG1Steals5}<br /><br />{SanJoseStateG1Steals6}<br /><br />{SanJoseStateG1Steals7}<br /><br />{SanJoseStateG1Steals8}<br /><br />{SanJoseStateG1Steals9}<br /><br />{SanJoseStateG1Steals10}</h2>
        <h2>Blocks<br /><br />{SanJoseStateG1Blocks1}<br /><br />{SanJoseStateG1Blocks2}<br /><br />{SanJoseStateG1Blocks3}<br /><br />{SanJoseStateG1Blocks4}<br /><br />{SanJoseStateG1Blocks5}<br /><br />{SanJoseStateG1Blocks6}<br /><br />{SanJoseStateG1Blocks7}<br /><br />{SanJoseStateG1Blocks8}<br /><br />{SanJoseStateG1Blocks9}<br /><br />{SanJoseStateG1Blocks10}</h2>
        <h2>Turnovers<br /><br />{SanJoseStateG1Turnovers1}<br /><br />{SanJoseStateG1Turnovers2}<br /><br />{SanJoseStateG1Turnovers3}<br /><br />{SanJoseStateG1Turnovers4}<br /><br />{SanJoseStateG1Turnovers5}<br /><br />{SanJoseStateG1Turnovers6}<br /><br />{SanJoseStateG1Turnovers7}<br /><br />{SanJoseStateG1Turnovers8}<br /><br />{SanJoseStateG1Turnovers9}<br /><br />{SanJoseStateG1Turnovers10}</h2>
        <h2>Totals</h2>
        <h2>{SanJoseStateSumG1}</h2>
        <h2>{SanJoseStateTwoFGSumG1}</h2>
        <h2>{SanJoseStateTwoFGAttSumG1}</h2>
        <h2>{SanJoseStateTwoFGPctG1} </h2>
        <h2>{SanJoseStateThreeFGSumG1} </h2>
        <h2>{SanJoseStateThreeFGAttSumG1} </h2>
        <h2>{SanJoseStateThreeFGPctG1} </h2>
        <h2>{SanJoseStateTotalFGsG1}</h2>
        <h2>{SanJoseStateTotalFGAttsG1}</h2>
        <h2>{SanJoseStateTotalFGPctG1}</h2>
        <h2>{SanJoseStateFTMSumG1} </h2>
        <h2>{SanJoseStateFTASumG1} </h2>
        <h2>{SanJoseStateFTPctG1} </h2>
        <h2>{SanJoseStateSumG1Rebounds}</h2>
        <h2>{SanJoseStateSumG1Assists}</h2>
        <h2>{SanJoseStateSumG1Steals} </h2>
        <h2>{SanJoseStateSumG1Blocks} </h2>
         <h2> {SanJoseStateSumG1Turnovers}</h2>
      </div>
    </div>
  );
};