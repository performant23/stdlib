/* eslint-disable function-paren-newline */

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var merge = require( '@stdlib/utils/merge' );


// MAIN //

/**
* ESLint rules.
*
* @namespace rules
*/
var rules = merge(
	{},
	require( './programmer_errors.js' ),
	require( './best_practices.js' ),
	require( './strict.js' ),
	require( './variables.js' ),
	require( './nodejs.js' ),
	require( './style.js' ),
	require( './es2015.js' ),
	require( './stdlib.js')
);


// EXPORTS //

module.exports = rules;
