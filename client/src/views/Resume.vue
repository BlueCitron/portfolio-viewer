<template >
  <v-container fluid>
    <v-card>
      <v-card-title class="mb-3">서동성 (BlueCitron)</v-card-title>
      <v-card-text>
        <p>{{ resume.profile.intro }}</p>
        <v-simple-table>
          <tbody>
            <tr v-for="item in resume.profile.info">
              <td>{{ item.property }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>


      <v-card-title class="mb-3">경력</v-card-title>
      <template v-for="item in resume.experience">
        <v-card-text>
          <p>{{ item.title }}</p>
          <v-simple-table>
            <tbody>
              <tr>
                <td>Period</td>
                <td>{{ item.period }}</td>
              </tr>
              <tr>
                <td>Position</td>
                <td>{{ item.position }}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{{ item.desc }}</td>
              </tr>
              <tr>
                <td>Projects</td>
                <td>{{ item.projects }}</td>
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
            <tr v-for="item in resume.skills">
              <td style="width: 20%;">{{ item.name }}</td>
              <td style="width: 10%;">{{ item.grade }}</td>
              <td style="width: 70%;">{{ item.desc }}</td>
            </tr>
            <!-- <tr>
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
            </tr> -->

          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  computed: {
    resume: function () {
      return this.$store.state.resume
    }
  }
}
</script>
<style>

</style>
