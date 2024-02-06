// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(space) {
  // [START meet_v2beta_generated_SpacesService_UpdateSpace_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Space to be updated.
   */
  // const space = {}
  /**
   *  Optional. Field mask used to specify the fields to be updated in the space.
   *  If update_mask isn't provided, it defaults to '*' and updates all
   *  fields provided in the request, including deleting fields not set in the
   *  request.
   */
  // const updateMask = {}

  // Imports the Meet library
  const {SpacesServiceClient} = require('@google-cloud/meet').v2beta;

  // Instantiates a client
  const meetClient = new SpacesServiceClient();

  async function callUpdateSpace() {
    // Construct request
    const request = {
      space,
    };

    // Run request
    const response = await meetClient.updateSpace(request);
    console.log(response);
  }

  callUpdateSpace();
  // [END meet_v2beta_generated_SpacesService_UpdateSpace_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));