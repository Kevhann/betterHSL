import { Route } from '../../types/route';

export const route: Route = {
  walkDistance: 700.0661538572001,
  duration: 2535,
  legs: [
    {
      legGeometry: {
        points: 'ysmnJ}ulwCQ`@CHUj@IUo@gBs@CCJEJCHUx@w@lC[fADHGLGPCFGNCFGSMW'
      },
      mode: 'WALK',
      startTime: 1619204993000,
      endTime: 1619205240000,
      trip: null,
      from: {
        lat: 60.204299,
        lon: 24.973919,
        name: 'Origin',
        stop: null
      },
      to: {
        lat: 60.20593,
        lon: 24.97255,
        name: 'Kokkosaarenkatu'
      },
      distance: 264.702
    },
    {
      legGeometry: {
        points:
          's}mnJanlwCzKzXN^Vj@`@lAv@dCLn@Df@B~@Bj@AjAEz@O`AU][Yu@o@OKcA{@qA{@kBkAq@]OvCAd@@\\HTzBfG_ErJi@{AsBkFSYW@uBi@OSm@sAqBqFg@sAcBfEc@bAS^u@`BUl@sAfDgAlCILMZSf@_AhBo@tAy@nAs@fAu@dAcAjAgChCwBfBZnApArEj@lBrA`Fh@zA`FbQTt@lBxG`DnKn@fCfA|Dj@lCAfDBjAJ|AHhAF~@PdB^hCV|Ar@xDb@nBr@~Bp@fCt@vDT~A^zDs@Ju@lAa@fBKbB?dBFnATnAZx@V^r@p@`B`A~@b@`BVxBZjBUlADjAE~AGz@KZETIp@Md@O|Aa@pBo@v@Uv@[|Ag@NGXMPEr@]jAi@~@]x@Wf@QHr@PrCDj@'
      },
      mode: 'BUS',
      startTime: 1619205240000,
      endTime: 1619206140000,
      trip: {
        route: {
          shortName: '506',
          longName: 'Myllypuro(M)-Viikki-Kumpula-Pasila-Meilahti'
        },
        tripHeadsign: 'Meilahti',
        stops: { name: null }
      },
      from: {
        lat: 60.20593,
        lon: 24.97255,
        name: 'Kokkosaarenkatu',
        stop: {
          code: 'H3040',
          name: 'Kokkosaarenkatu'
        }
      },
      to: {
        lat: 60.1981,
        lon: 24.93365,
        name: 'Pasilan asema'
      },
      distance: 4984.8742587841425
    },
    {
      legGeometry: {
        points: 'cmlnJaxdwCAZHn@QFI?UGg@GOFKBAJEB]JMFBX@NGBo@TBZE@c@PIB'
      },
      mode: 'WALK',
      startTime: 1619206140000,
      endTime: 1619206312000,
      trip: null,
      from: {
        lat: 60.1981,
        lon: 24.93365,
        name: 'Pasilan asema',
        stop: {
          code: 'H2101',
          name: 'Pasilan asema'
        }
      },
      to: {
        lat: 60.19941,
        lon: 24.93212,
        name: 'Pasila'
      },
      distance: 222.827
    },
    {
      legGeometry: {
        points:
          'gulnJmqdwCgNtAgC~CcBlDmFtNwHnP_D~Hm@fBqAfDsAlD{@rB}@|Bs@dBaA~BuBfFmCrGuBfFeBbEcCtFaCdG}ApEwAdFcBlGoAdFe@tBw@pE}@|FmAtJ[jCo@jD[~AgBzHoAfFy@bDk@xCg@bCo@jC{@hD}@nD_AnDkApE}AfGa@jBa@tBe@jCaAjGu@dEgAfF_@nB]tBYlBWvBUlCQdCMvDErC@tCBxD@zA@|MU`ZgDdm@o@fJa@dG_AdP_@fRJ|PJ|Af@tE~BdLlGdT`AnD|@fDpFfRdBlJx@dGjArQJzPcCjfAo@bQEhL'
      },
      mode: 'RAIL',
      startTime: 1619206620000,
      endTime: 1619207340000,
      trip: {
        route: {
          shortName: 'L',
          longName: 'Helsinki-Kirkkonummi'
        },
        tripHeadsign: 'Kirkkonummi',
        stops: { name: null }
      },
      from: {
        lat: 60.19941,
        lon: 24.93212,
        name: 'Pasila',
        stop: { code: 'H0071', name: 'Pasila' }
      },
      to: {
        lat: 60.219361,
        lon: 24.813239,
        name: 'Leppävaara'
      },
      distance: 7842.8651147394485
    },
    {
      legGeometry: {
        points: '_rpnJwimvCBE@g@Z?B@D?F@H?X??JFx@N`@ElHIDKRO?I?ALEH'
      },
      mode: 'WALK',
      startTime: 1619207340000,
      endTime: 1619207528000,
      trip: null,
      from: {
        lat: 60.219361,
        lon: 24.813239,
        name: 'Leppävaara',
        stop: {
          code: 'E1059',
          name: 'Leppävaara'
        }
      },
      to: {
        lat: 60.219141,
        lon: 24.811247,
        name: 'Destination'
      },
      distance: 212.236
    }
  ]
};
