export async function fetchPagesPosts(category) {
  const response = await fetch(`${process.env.backAPI}/posts/${category}`);
  const data = await response.json();
  return data;
}

export async function fetchPostDetail(category, id) {
  const response = await fetch(
    `${process.env.backAPI}/posts/${category}/${id}`
  );
  const data = await response.json();
  return data;
}

export async function fetchRecentPosts() {
  const response = await fetch(`${process.env.backAPI}/posts/recentPosts`);
  const { trial, posts } = await response.json();

  if (trial) {
    return posts;
  }
}

export async function fetchPopularPosts() {
  const response = await fetch(`${process.env.backAPI}/posts/popularPosts`);
  const { trial, posts } = await response.json();

  if (trial) {
    return posts;
  }
}

export async function fetchSearchField(searchField) {
  const response = await fetch(`${process.env.backAPI}/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: searchField,
  });
  const data = await response.json();

  return data;
}

export async function postLogin(email, password) {
  const response = await fetch(`${process.env.backAPI}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const { trial, accessToken, userId } = await response.json();

  if (trial) return { userId, accessToken };
}

export async function postArticle(form) {
  const response = await fetch(`${process.env.backAPI}/posts`, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const { trial, post } = await response.json();

  if (trial) {
    return { trial, post };
  }
}

export async function fetchGoogleAnalytics() {
  const result = await fetch(
    'https://www.googleapis.com/analytics/v3/data/ga?access_token=ya29.A0ARrdaM-iisRGNNqChaQPeBCx1wBo8ARSZFK1chFyLQHG9oojRkM_ze3qYZioemtRl80not5wXLZfA7gvSKxgmDJbjww5gkZYcKZKZab7a3_y3Tp7RJXA7nSIGq2-AjSGlN7pA_GXR2haZ4hW7UvsEDgbESmbSQ&ids=ga%3A262553607&dimensions=ga%3Adate&metrics=ga%3A1dayUsers&sort=-ga%3Adate&start-date=30daysAgo&end-date=today'
  );

  const data = await result.json();

  return data;
}
