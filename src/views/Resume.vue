<template >
  <v-container fluid>
    <v-card>
      <v-card-title class="mb-3">서동성 (BlueCitron)</v-card-title>
      <v-card-text>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <v-simple-table>
          <tbody>
            <tr>
              <td>Phone</td>
              <td>010-7392-8550</td>
            </tr>
            <tr>
              <td>Github</td>
              <td>https://github.com/BlueCitron</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>sds901234@naver.com</td>
            </tr>

          </tbody>
        </v-simple-table>
      </v-card-text>


      <v-card-title class="mb-3">경력</v-card-title>
      <template v-for="item in [1, 2]">
        <v-card-text>
          <p>SKTelecom TANGO</p>
          <v-simple-table>
            <tbody>
              <tr>
                <td>Period</td>
                <td>2019.08.03 - 2019.08.03</td>
              </tr>
              <tr>
                <td>Position</td>
                <td>웹 개발자</td>
              </tr>
              <tr>
                <td>Projects</td>
                <td>OC(Operating Collecting), OR(Operating Resource)</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
      </template>

      <v-card-title class="mb-3">보유기술</v-card-title>
      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Skill</th>
              <th class="text-left">Grade</th>
              <th class="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C/C++</td>
              <td>A</td>
              <td>학부에서 배움. 인간 컴파일러 수준.</td>
            </tr>
            <tr>
              <td>Java</td>
              <td>S</td>
              <td>제임스 고슬링이 울고갈 수준.</td>
            </tr>
            <tr>
              <td>Node.js</td>
              <td>S</td>
              <td>집에 NPM 서버를 하나 만들 정도.</td>
            </tr>
            <tr>
              <td>Vue.js</td>
              <td>A</td>
              <td>Evan You라는 학생 과외해주는 중.</td>
            </tr>
            <tr>
              <td>TIBCO BusenessWorks</td>
              <td>S</td>
              <td>라면 끓이는 시간이면 EAI 하나 뚝딱.</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {

}
</script>
<style>

</style>
